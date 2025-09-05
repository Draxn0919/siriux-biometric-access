import { Button } from "@/components/ui/button";

interface HeaderProps {
  onWaitlistClick: () => void;
}

export default function Header({ onWaitlistClick }: HeaderProps) {
  return (
    <header className="w-full bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/be3aba8a-8d20-4516-9336-3f7ed7945bbf.png" 
            alt="Siriux Logo" 
            className="w-12 h-12 object-contain"
          />
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