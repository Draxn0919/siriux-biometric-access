import { Button } from "@/components/ui/button";
import { Scan } from "lucide-react";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export default function Header({ onWaitlistClick }: HeaderProps) {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Scan className="w-6 h-6 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-primary">Siriux</span>
            <span className="text-xs text-muted-foreground -mt-1">Fintech biométrico</span>
          </div>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onWaitlistClick}
          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-glow"
        >
          Lista de espera
        </Button>
      </div>
    </header>
  );
}