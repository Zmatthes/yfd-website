-- Drop existing policies and create comprehensive RLS setup
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON public.quotes;
DROP POLICY IF EXISTS "Allow public inserts" ON public.quotes;

-- Ensure RLS is enabled
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Create comprehensive policy that allows both anonymous and authenticated users to insert
CREATE POLICY "Allow quote submissions" ON public.quotes
FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

-- Grant necessary permissions to anon role
GRANT INSERT ON public.quotes TO anon;
GRANT USAGE ON SCHEMA public TO anon;