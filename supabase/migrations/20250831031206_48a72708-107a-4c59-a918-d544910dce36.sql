-- Fix function search path security issue
CREATE OR REPLACE FUNCTION public.get_waitlist_count()
RETURNS INTEGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
STABLE
AS $$
BEGIN
  RETURN (SELECT COUNT(*) FROM public.waitlist);
END;
$$;