-- Fix the trigger to properly call the email edge function
CREATE OR REPLACE FUNCTION public.notify_new_quote()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
begin
  -- Use pg_net to make the HTTP call without causing transaction issues
  perform net.http_post(
    url := 'https://jsgyoqpzhgzhwnwfekjh.supabase.co/functions/v1/send-quote-email',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key', true)
    ),
    body := jsonb_build_object('quoteData', row_to_json(NEW))
  );
  return NEW;
end;
$function$;