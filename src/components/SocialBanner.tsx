import { Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SocialBanner() {
  return (
    <section className="py-16 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Síguenos en redes sociales
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Mantente al día con las últimas novedades de Siriux y únete a nuestra comunidad
          </p>
          
          <div className="flex justify-center space-x-6">
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              <Instagram className="w-5 h-5 mr-2" />
              Instagram
            </Button>
            
            <Button 
              variant="secondary"
              size="lg"
              className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-primary transition-all duration-300"
              onClick={() => window.open('#', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}