-- Let's try the most basic policy possible
DROP POLICY IF EXISTS "public_quotes_insert" ON public.quotes;

-- Create the simplest possible policy
CREATE POLICY "allow_all_inserts" ON public.quotes
FOR INSERT
TO public
WITH CHECK (true);