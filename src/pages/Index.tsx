import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Partners from "@/components/Partners";
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
        <div ref={waitlistRef}>
          <WaitlistForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
