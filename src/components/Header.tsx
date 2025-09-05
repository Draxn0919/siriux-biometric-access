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
            src="/lovable-uploads/61d77377-e7ac-424d-8b64-fb165e1df198.png" 
            alt="Siriux Logo" 
            className="h-10 object-contain"
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