import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

interface HeroProps {
  onScrollToWaitlist: () => void;
}

export default function Hero({ onScrollToWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-subtle overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Accede al sistema financiero{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                sin fronteras
              </span>
              , solo con tus datos biométricos.
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
              En Siriux ayudamos a migrantes a crear cuentas bancarias y enviar dinero 
              internacionalmente sin necesidad de documentos obligatorios.
            </p>
            
            <Button 
              size="lg"
              onClick={onScrollToWaitlist}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6"
            >
              Únete a la lista de espera
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-2xl shadow-elegant overflow-hidden">
              <img 
                src={heroImage} 
                alt="Tecnología biométrica Siriux" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-glow/10 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}