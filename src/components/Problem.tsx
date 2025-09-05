import { AlertTriangle, Ban } from "lucide-react";

export default function Problem() {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-10 h-10 text-destructive" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            El problema que enfrentan millones
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            <span className="font-semibold text-destructive">Millones de migrantes no pueden acceder a una cuenta bancaria</span> por falta de documentos locales, 
            lo que los obliga a manejar solo efectivo y a pagar comisiones altísimas para enviar dinero.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6">
              <Ban className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Sin acceso bancario
              </h3>
              <p className="text-muted-foreground text-center">
                Documentos locales requeridos excluyen a millones
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <AlertTriangle className="w-12 h-12 text-destructive mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Solo efectivo
              </h3>
              <p className="text-muted-foreground text-center">
                Riesgos de seguridad y limitaciones constantes
              </p>
            </div>
            
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-destructive rounded-lg flex items-center justify-center mb-4">
                <span className="text-white font-bold text-lg">%</span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Comisiones altas
              </h3>
              <p className="text-muted-foreground text-center">
                Costos excesivos para enviar dinero a familia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}