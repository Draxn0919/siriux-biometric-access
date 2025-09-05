-- Add new columns to waitlist table for enhanced form data
ALTER TABLE public.waitlist 
ADD COLUMN country TEXT,
ADD COLUMN interests TEXT[];

-- Add indexes for better query performance
CREATE INDEX idx_waitlist_country ON public.waitlist(country);
CREATE INDEX idx_waitlist_interests ON public.waitlist USING GIN(interests);