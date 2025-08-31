import { Building2, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
              <Building2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold">Siriux</span>
          </div>
          
          <div className="flex justify-center space-x-8">
            <a 
              href="#" 
              className="text-background/80 hover:text-accent transition-colors duration-300"
            >
              Términos y condiciones
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-accent transition-colors duration-300"
            >
              Política de privacidad
            </a>
            <a 
              href="#" 
              className="text-background/80 hover:text-accent transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
          
          <div className="flex justify-end space-x-4">
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 transform hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 transform hover:scale-110"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-accent transition-all duration-300 transform hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Siriux. Todos los derechos reservados. Revolucionando el acceso financiero global.
          </p>
        </div>
      </div>
    </footer>
  );
}