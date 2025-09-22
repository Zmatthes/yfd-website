-- Drop existing policy and recreate it cleanly
DROP POLICY IF EXISTS "Allow public quote submissions" ON public.quotes;

-- Create a simple INSERT policy for anon users
CREATE POLICY "Allow public quote submissions" 
ON public.quotes 
FOR INSERT 
TO anon 
WITH CHECK (true);