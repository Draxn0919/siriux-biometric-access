import { Globe, Shield, FileX } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Globe,
    title: "Accesibilidad global",
    description: "Conecta con el sistema financiero desde cualquier parte del mundo, sin barreras geográficas."
  },
  {
    icon: Shield,
    title: "Transacciones seguras",
    description: "Tu identidad biométrica es única e imposible de falsificar, garantizando máxima seguridad."
  },
  {
    icon: FileX,
    title: "Sin documentos obligatorios",
    description: "Olvídate de papeleos complejos. Solo necesitas tu huella digital y reconocimiento facial."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Qué es Siriux?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Siriux usa tecnología biométrica avanzada para abrir cuentas bancarias 
            a migrantes sin necesidad de documentos tradicionales.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
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