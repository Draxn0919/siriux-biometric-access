import { Building2, CreditCard, Shield, Zap } from "lucide-react";

const partners = [
  { name: "Western Union", icon: CreditCard },
  { name: "Bancos Locales", icon: Building2 },
  { name: "Sistemas de Llaves", icon: Shield },
  { name: "FinTech Partners", icon: Zap }
];

export default function Partners() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Aliados que confían en nuestra visión
          </h2>
          <p className="text-muted-foreground">
            Trabajamos con las instituciones financieras más respetadas del mundo
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div 
                key={partner.name}
                className="flex flex-col items-center justify-center p-6 bg-background rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {partner.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}