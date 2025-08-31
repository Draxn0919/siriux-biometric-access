import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export default function Header({ onWaitlistClick }: HeaderProps) {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <Building2 className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-foreground">Siriux</span>
        </div>
        
        <Button 
          variant="outline" 
          onClick={onWaitlistClick}
          className="transition-all duration-300 hover:shadow-glow"
        >
          Lista de espera
        </Button>
      </div>
    </header>
  );
}