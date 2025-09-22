-- Enable RLS on quotes table
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Grant INSERT permission to anon role
GRANT INSERT ON public.quotes TO anon;

-- Ensure the policy is correct
DROP POLICY IF EXISTS "Allow public quote submissions" ON public.quotes;

CREATE POLICY "Allow public quote submissions" 
ON public.quotes 
FOR INSERT 
TO anon 
WITH CHECK (true);