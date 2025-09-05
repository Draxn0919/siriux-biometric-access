import { CheckCircle, Scan, CreditCard } from "lucide-react";
import biometricImage from "@/assets/biometric-scanning.jpg";

export default function Solution() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary">
                La solución
              </h2>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
              Con Siriux tendrás tu primera cuenta digital sin documentos
            </h3>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Podrás recibir salario, ahorrar y enviar dinero sin fronteras usando 
              únicamente tu identidad biométrica.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-foreground">Cuenta digital inmediata</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-foreground">Recibe tu salario directamente</span>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                  <Scan className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg text-foreground">Solo con biometría, sin documentos</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in delay-300">
            <div className="relative rounded-2xl shadow-elegant overflow-hidden">
              <img 
                src="/lovable-uploads/c8a91eff-94a3-4bcd-a751-812d44daa0af.png" 
                alt="Envía dinero a tu familia con Siriux - Remesas seguras sin fronteras" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary/20"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-glow/20 rounded-full animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </section>
  );
}