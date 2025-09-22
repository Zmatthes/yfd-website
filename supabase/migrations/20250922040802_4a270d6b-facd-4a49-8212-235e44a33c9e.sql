-- Grant INSERT permission to anon role on quotes table
GRANT INSERT ON public.quotes TO anon;

-- Also grant USAGE on the sequence for the ID column
GRANT USAGE ON SCHEMA public TO anon;