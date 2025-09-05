import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Sarit Daniela Sanchez",
    role: "CEO & Fundadora",
    description: "Economista experta en fintech e inclusión financiera",
    image: "/lovable-uploads/placeholder-avatar.png",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Daniel Rivera Yepes", 
    role: "CTO & Co-fundador",
    description: "Ing. Mecatronico, Especialista en Inteligencia Artificial",
    image: "/lovable-uploads/placeholder-avatar.png",
    social: {
      linkedin: "#",
      instagram: "#"
    }
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            El equipo detrás de Siriux
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un grupo apasionado trabajando por la inclusión financiera global
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="border-0 shadow-elegant hover:shadow-glow transition-all duration-300 animate-fade-in-up bg-card"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="relative mb-6">
                  <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center shadow-glow">
                    <span className="text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {member.name}
                </h3>
                
                <p className="text-primary font-semibold mb-3">
                  {member.role}
                </p>
                
                <p className="text-muted-foreground text-sm mb-6">
                  {member.description}
                </p>
                
                <div className="flex justify-center space-x-4">
                  <a 
                    href={member.social.instagram}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href={member.social.linkedin}
                    className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}