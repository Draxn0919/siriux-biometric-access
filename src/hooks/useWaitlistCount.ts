import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useWaitlistCount = () => {
  const [count, setCount] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCount = async () => {
    try {
      setLoading(true);
      // Use count() from the table directly instead of rpc
      const { count, error } = await supabase
        .from('waitlist')
        .select('*', { count: 'exact', head: true });
      
      if (error) throw error;
      
      setCount(count || 0);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      console.error('Error fetching waitlist count:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCount();

    // Subscribe to real-time updates
    const channel = supabase
      .channel('waitlist_changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'waitlist'
        },
        () => {
          fetchCount(); // Refetch count when new user joins
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return { count, loading, error, refetch: fetchCount };
};