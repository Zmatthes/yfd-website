-- Grant proper permissions to anon role
GRANT INSERT ON TABLE public.quotes TO anon;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO anon;