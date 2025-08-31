import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useWaitlistCount = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCount = async () => {
    try {
      setLoading(true);
      console.log('Fetching waitlist count...');
      
      // Simplified query to get count
      const { data, error, count: totalCount } = await supabase
        .from('waitlist')
        .select('id', { count: 'exact' });
      
      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      const actualCount = totalCount || 0;
      console.log('Waitlist count received:', actualCount);
      setCount(actualCount);
      setError(null);
    } catch (err: any) {
      console.error('Error fetching waitlist count:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCount();

    // Subscribe to real-time updates
    console.log('Setting up realtime subscription...');
    const channel = supabase
      .channel('waitlist_realtime')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist'
        },
        (payload) => {
          console.log('New user registered!', payload);
          fetchCount(); // Refetch count when new user joins
        }
      )
      .subscribe((status) => {
        console.log('Realtime subscription status:', status);
      });

    return () => {
      console.log('Cleaning up realtime subscription');
      supabase.removeChannel(channel);
    };
  }, []);

  return { count, loading, error, refetch: fetchCount };
};