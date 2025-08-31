import { Users } from "lucide-react";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";

export default function WaitlistCounter() {
  const { count, loading } = useWaitlistCount();

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4 bg-gradient-subtle rounded-lg border border-border/50">
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-muted-foreground animate-pulse" />
          <span className="text-sm text-muted-foreground">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center p-4 bg-gradient-subtle rounded-lg border border-border/50 shadow-card">
      <div className="flex items-center space-x-3">
        <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
          <Users className="w-5 h-5 text-primary" />
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary bg-gradient-primary bg-clip-text text-transparent">
            {count.toLocaleString()}
          </div>
          <div className="text-sm text-muted-foreground">
            {count === 1 ? 'usuario registrado' : 'usuarios registrados'}
          </div>
        </div>
      </div>
    </div>
  );
}