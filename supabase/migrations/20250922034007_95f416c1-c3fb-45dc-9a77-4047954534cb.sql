-- Check current RLS policies on quotes table
DO $$
BEGIN
    -- Drop existing policy if it exists
    DROP POLICY IF EXISTS "Allow public inserts" ON public.quotes;
    
    -- Create a more permissive policy for anonymous users to insert quotes
    CREATE POLICY "Enable insert for anonymous users" ON public.quotes
    FOR INSERT 
    WITH CHECK (true);
    
    -- Verify RLS is enabled
    ALTER TABLE public.quotes ENABLE ROW LEVEL SECURITY;
END $$;