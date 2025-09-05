import { Scan, Shield, Smartphone, CreditCard } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import familyImage from "@/assets/migrant-family-silhouette.jpg";

const features = [
  {
    icon: Scan,
    title: "Biometría avanzada",
    description: "Tu rostro y huella dactilar son tu nueva identificación. Tecnología de última generación para máxima seguridad."
  },
  {
    icon: Shield,
    title: "Seguridad inquebrantable",
    description: "Protección de datos biométricos con encriptación militar. Tu identidad siempre estará protegida."
  },
  {
    icon: Smartphone,
    title: "Cuenta en minutos",
    description: "Crea tu cuenta bancaria en menos de 5 minutos, solo necesitas tu smartphone y tu rostro."
  },
  {
    icon: CreditCard, 
    title: "Remesas instantáneas",
    description: "Envía dinero a tu familia al instante, sin comisiones ocultas ni documentos adicionales."
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ¿Qué es Siriux?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Una revolución fintech que utiliza biometría para democratizar el acceso 
            al sistema financiero, especialmente diseñado para migrantes.
          </p>
        </div>

        {/* Feature highlighting migrants */}
        <div className="mb-16 text-center">
          <div className="relative max-w-md mx-auto mb-8">
            <img 
              src={familyImage} 
              alt="Familias migrantes - Nuestro compromiso" 
              className="w-full h-64 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
          </div>
          <h3 className="text-2xl font-semibold text-primary mb-4">
            Construido para migrantes, por migrantes
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entendemos los desafíos únicos que enfrentan las familias migrantes. 
            Siriux nació para eliminar las barreras financieras y conectar sueños con oportunidades.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={feature.title}
                className="border-0 shadow-card hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-background/80 backdrop-blur-sm animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-glow">
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