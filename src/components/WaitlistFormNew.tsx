import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { Loader2, CheckCircle } from "lucide-react";
import WaitlistCounter from "@/components/WaitlistCounter";
import CustomPhoneInput from "@/components/PhoneInput";

const countries = [
  "Argentina", "Bolivia", "Brasil", "Chile", "Colombia", "Costa Rica", "Ecuador", "El Salvador", 
  "Guatemala", "Honduras", "México", "Nicaragua", "Panamá", "Paraguay", "Perú", "República Dominicana",
  "Uruguay", "Venezuela", "España", "Estados Unidos", "Canadá"
];

const interests = [
  { id: "salary", label: "Recibir mi salario sin efectivo" },
  { id: "remittances", label: "Enviar dinero a mi familia" },
  { id: "savings", label: "Ahorrar / manejar dinero digital" },
  { id: "all", label: "Todo lo anterior" }
];

export default function WaitlistFormNew() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    interests: [] as string[]
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
        .insert([{
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          country: formData.country || null,
          interests: formData.interests
        }]);

      if (error) throw error;

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", country: "", interests: [] });
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

  const handleCountryChange = (country: string) => {
    setFormData(prev => ({
      ...prev,
      country: country
    }));
  };

  const handleInterestChange = (interestId: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      interests: checked 
        ? [...prev.interests, interestId]
        : prev.interests.filter(id => id !== interestId)
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
        
        <Card className="max-w-lg mx-auto border-0 shadow-elegant animate-fade-in-up">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">
              Lista de espera
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
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
                <Label htmlFor="email">Correo electrónico *</Label>
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
                <Label htmlFor="phone">Número de celular (WhatsApp) *</Label>
                <CustomPhoneInput
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="Número de teléfono"
                  className="transition-all duration-300 focus:shadow-glow"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="country">País donde vives actualmente</Label>
                <Select onValueChange={handleCountryChange}>
                  <SelectTrigger className="transition-all duration-300 focus:shadow-glow">
                    <SelectValue placeholder="Selecciona tu país" />
                  </SelectTrigger>
                  <SelectContent className="bg-background border-border shadow-elegant">
                    {countries.map((country) => (
                      <SelectItem key={country} value={country} className="hover:bg-primary/10">
                        {country}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <Label>¿Qué te interesa más de Siriux?</Label>
                <div className="space-y-3">
                  {interests.map((interest) => (
                    <div key={interest.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={interest.id}
                        checked={formData.interests.includes(interest.id)}
                        onCheckedChange={(checked) => handleInterestChange(interest.id, checked as boolean)}
                        className="border-primary data-[state=checked]:bg-primary"
                      />
                      <Label 
                        htmlFor={interest.id} 
                        className="text-sm text-foreground cursor-pointer"
                      >
                        {interest.label}
                      </Label>
                    </div>
                  ))}
                </div>
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