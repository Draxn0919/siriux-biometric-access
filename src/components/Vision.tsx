import { Target, Globe, Telescope } from "lucide-react";

export default function Vision() {
  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 flex items-center justify-center backdrop-blur-sm transform -rotate-45">
              <Telescope className="w-10 h-10 text-white rotate-45" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Nuestra Visión
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
            <Globe className="w-16 h-16 text-white mx-auto mb-6" />
            <p className="text-xl md:text-2xl text-white leading-relaxed font-medium">
              Queremos <span className="text-white font-bold">ser la plataforma líder en inclusión financiera 
              para migrantes en Latinoamérica y el mundo</span>, transformando la manera en que reciben y envían dinero, 
              y construyendo un futuro donde ningún migrante quede fuera del sistema financiero.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}