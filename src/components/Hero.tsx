import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import biometricImage from "@/assets/biometric-scanning.png";

interface HeroProps {
  onScrollToWaitlist: () => void;
}

export default function Hero({ onScrollToWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Accede al sistema financiero y digital{" "}
              <span className="text-[#FFB800] drop-shadow-gold font-extrabold">
                sin fronteras
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Con Siriux, abre tu cuenta digital sin necesidad de documentos locales. 
              Recibe tu salario, guarda dinero y envía remesas de forma segura y sencilla.
            </p>
            
            <Button 
              size="lg"
              onClick={onScrollToWaitlist}
              className="bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-accent transition-all duration-300 transform hover:scale-105 text-lg px-8 py-6 font-semibold"
            >
              Únete a la lista de espera
              <ArrowDown className="ml-2 w-5 h-5" />
            </Button>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="grid grid-cols-1 gap-6">
              <div className="relative rounded-2xl shadow-elegant overflow-hidden">
                <img 
                  src={biometricImage} 
                  alt="Tecnología biométrica Siriux - Reconocimiento facial seguro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
              </div>
            </div>
            
            {/* Floating elements with wine red theme */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-glow/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}