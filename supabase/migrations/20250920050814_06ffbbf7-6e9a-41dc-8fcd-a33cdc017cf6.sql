-- Check if there are any triggers that might be causing read-only issues
-- First, let's see the current trigger on quotes table
SELECT 
  tgname as trigger_name,
  tgrelid::regclass as table_name,
  pg_get_triggerdef(oid) as trigger_definition
FROM pg_trigger 
WHERE tgrelid = 'public.quotes'::regclass
AND NOT tgisinternal;