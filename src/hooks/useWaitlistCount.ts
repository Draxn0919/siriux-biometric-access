import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export function useWaitlistCount() {
  const [count, setCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCount = async () => {
    try {
      const { data, error } = await supabase.rpc('get_waitlist_count');
      if (error) throw error;
      setCount(data || 0);
    } catch (error) {
      console.error('Error fetching waitlist count:', error);
      setCount(0);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchCount();

    // Set up real-time subscription for waitlist changes
    const channel = supabase
      .channel('waitlist-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist'
        },
        () => {
          // Refetch count when new user joins
          fetchCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { count, isLoading };
}