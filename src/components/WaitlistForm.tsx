import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import WaitlistCounter from "@/components/WaitlistCounter";
import CustomPhoneInput from "@/components/PhoneInput";

export default function WaitlistForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('waitlist')
        .insert([formData]);

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "" });
      }, 3000);
      toast({
        title: "¡Registro exitoso!",
        description: "Te contactaremos pronto con novedades de Siriux.",
      });
    } catch (error: any) {
      toast({
        title: "Error al registrarse",
        description: error.message || "Hubo un problema. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handlePhoneChange = (phone: string) => {
    setFormData(prev => ({
      ...prev,
      phone: phone
    }));
  };

  if (isSubmitted) {
    return (
      <section id="waitlist" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <Card className="max-w-md mx-auto border-0 shadow-elegant animate-scale-in">
            <CardContent className="p-8 text-center">
              <CheckCircle className="w-16 h-16 text-accent mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-foreground mb-4">
                ¡Bienvenido a Siriux!
              </h3>
              <p className="text-muted-foreground">
                Te contactaremos pronto con las últimas novedades y acceso prioritario.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section id="waitlist" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sé de los primeros en usar Siriux
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Únete a nuestra lista de espera y obtén acceso prioritario a la revolución financiera.
          </p>
          <WaitlistCounter />
        </div>
        
        <Card className="max-w-md mx-auto border-0 shadow-elegant animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Lista de espera
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre completo"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:shadow-glow"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Correo electrónico</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transition-all duration-300 focus:shadow-glow"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Teléfono (opcional)</Label>
                <CustomPhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Número de teléfono"
                  className="transition-all duration-300 focus:shadow-glow"
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 transform hover:scale-105"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Registrando...
                  </>
                ) : (
                  "Unirme a la lista de espera"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}