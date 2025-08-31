-- Enable realtime for the waitlist table
ALTER PUBLICATION supabase_realtime ADD TABLE public.waitlist;

-- Add a policy to allow anonymous users to count waitlist entries
CREATE POLICY "Anyone can count waitlist entries" 
ON public.waitlist 
FOR SELECT 
USING (true);