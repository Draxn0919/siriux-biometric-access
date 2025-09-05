import { User, Download, Send, Wallet } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Crea tu cuenta digital",
    description: "Regístrate usando solo tu biometría, sin documentos locales",
    icon: User,
    color: "bg-primary"
  },
  {
    number: "02", 
    title: "Recibe tu dinero",
    description: "Tu empleador puede depositarte directamente en tu cuenta Siriux",
    icon: Download,
    color: "bg-accent"
  },
  {
    number: "03",
    title: "Envía y paga con libertad",
    description: "Transfiere dinero globalmente con comisiones mínimas",
    icon: Send,
    color: "bg-primary-glow"
  },
  {
    number: "04",
    title: "Administra y ahorra",
    description: "Gestiona tus finanzas y construye tu futuro económico",
    icon: Wallet,
    color: "bg-accent"
  }
];

export default function Steps() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Cómo funciona Siriux
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            En solo 4 pasos simples tendrás acceso completo al sistema financiero digital
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-elegant hover:shadow-glow transition-all duration-300 border border-border/50 h-full">
                  <div className="text-center">
                    <div className={`w-16 h-16 ${step.color} rounded-xl flex items-center justify-center mx-auto mb-6 shadow-glow`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="text-4xl font-bold text-primary/20 mb-4">
                      {step.number}
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {step.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
                
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-primary transform -translate-y-1/2"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}