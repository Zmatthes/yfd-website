-- Temporarily drop the trigger that's causing the read-only issue
DROP TRIGGER IF EXISTS trg_notify_quote ON public.quotes;

-- Also update the notify function to avoid the read-only transaction issue
CREATE OR REPLACE FUNCTION public.notify_new_quote()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
begin
  -- Use a simpler approach that won't cause read-only transaction issues
  -- Just return the new record without making HTTP calls during the transaction
  return NEW;
end;
$function$;

-- Create the trigger again but with a different approach
CREATE TRIGGER trg_notify_quote 
  AFTER INSERT ON public.quotes 
  FOR EACH ROW 
  EXECUTE FUNCTION public.notify_new_quote();