import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
import WaitlistProgress from "@/components/WaitlistProgress";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

const Index = () => {
  const waitlistRef = useRef<HTMLDivElement>(null);

  const scrollToWaitlist = () => {
    waitlistRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onWaitlistClick={scrollToWaitlist} />
      <main>
        <Hero onScrollToWaitlist={scrollToWaitlist} />
        <Features />
        <Partners />
        
        {/* Progress indicator section */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <WaitlistProgress />
            </div>
          </div>
        </section>
        
        <div ref={waitlistRef}>
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
