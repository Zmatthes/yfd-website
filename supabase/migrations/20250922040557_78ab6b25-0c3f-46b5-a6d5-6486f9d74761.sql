-- Re-enable RLS on quotes table
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Drop the existing policy if it exists
DROP POLICY IF EXISTS "Allow quote submissions" ON public.quotes;

-- Create a simple policy that allows anyone to insert quotes
CREATE POLICY "Allow public quote submissions" 
ON public.quotes 
FOR INSERT 
TO anon 
WITH CHECK (true);