-- Let's completely reset and do this properly
ALTER TABLE public.quotes DISABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "quotes_insert_policy" ON public.quotes;
DROP POLICY IF EXISTS "Allow public quote submissions" ON public.quotes;

-- Enable RLS
ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;

-- Create a policy without specifying roles (applies to all roles)
CREATE POLICY "public_quotes_insert" ON public.quotes
FOR INSERT
WITH CHECK (true);

-- Make sure permissions are granted
GRANT INSERT ON public.quotes TO anon;
GRANT INSERT ON public.quotes TO authenticated;