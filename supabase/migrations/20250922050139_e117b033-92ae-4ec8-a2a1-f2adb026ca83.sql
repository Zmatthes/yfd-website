-- Remove unnecessary authenticated permissions and keep it simple for anonymous users only
REVOKE INSERT ON public.quotes FROM authenticated;

-- Verify we have the right setup for anonymous users only
-- (The policy and anon permissions should already be correct from before)