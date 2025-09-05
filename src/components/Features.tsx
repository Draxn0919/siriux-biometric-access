import { Scan, Shield, Globe, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    icon: Scan,
    title: "Acceso sin documentos locales",
    description: "La tecnología permite que seas reconocido como 'ciudadano' digital"
  },
  {
    icon: Globe,
    title: "Accesibilidad global", 
    description: "Servicios financieros disponibles en cualquier lugar del mundo"
  },
  {
    icon: Shield,
    title: "Seguridad y confianza",
    description: "Te garantizamos la máxima seguridad en tus datos y en cada transacción"
  },
  {
    icon: CreditCard,
    title: "Remesas fáciles y económicas",
    description: "Porque te reconocemos como ciudadano, aquí podrás enviar de cuenta a cuenta de forma fácil"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Beneficios únicos de Siriux
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Revolucionamos el acceso financiero con tecnología de vanguardia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card 
                key={benefit.title}
                className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in-up bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}