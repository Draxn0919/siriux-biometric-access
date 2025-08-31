import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp } from "lucide-react";
import { useWaitlistCount } from "@/hooks/useWaitlistCount";

export default function WaitlistProgress() {
  const { count, isLoading } = useWaitlistCount();
  const target = 1000; // Meta de usuarios
  const percentage = Math.min((count / target) * 100, 100);

  if (isLoading) {
    return (
      <div className="bg-card border border-border rounded-xl p-6 shadow-card animate-pulse">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 bg-muted rounded w-32"></div>
          <div className="h-6 bg-muted rounded w-20"></div>
        </div>
        <div className="h-2 bg-muted rounded-full mb-2"></div>
        <div className="h-4 bg-muted rounded w-48"></div>
      </div>
    );
  }

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
            <Users className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Comunidad Siriux</h3>
            <p className="text-sm text-muted-foreground">Pioneros registrados</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-foreground">{count.toLocaleString()}</div>
          <div className="text-sm text-muted-foreground">de {target.toLocaleString()}</div>
        </div>
      </div>
      
      <div className="space-y-2">
        <Progress 
          value={percentage} 
          className="h-3"
        />
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-1 text-muted-foreground">
            <TrendingUp className="w-4 h-4" />
            <span>{percentage.toFixed(1)}% completado</span>
          </div>
          <span className="text-muted-foreground">
            {target - count > 0 ? `${(target - count).toLocaleString()} restantes` : '¡Meta alcanzada!'}
          </span>
        </div>
      </div>
      
      {percentage >= 100 && (
        <div className="mt-4 p-3 bg-accent/10 rounded-lg border border-accent/20">
          <p className="text-sm text-accent font-medium text-center">
            🎉 ¡Increíble! Hemos superado nuestra meta inicial
          </p>
        </div>
      )}
    </div>
  );
}