-- Re-enable RLS
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Drop all existing policies first
DROP POLICY IF EXISTS "Allow public quote submissions" ON public.quotes;

-- Create a simple policy that allows anyone to insert
CREATE POLICY "quotes_insert_policy" ON public.quotes
FOR INSERT
WITH CHECK (true);

-- Grant necessary permissions
GRANT INSERT ON public.quotes TO anon;
GRANT INSERT ON public.quotes TO authenticated;