import { useRef } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Vision from "@/components/Vision";
import Steps from "@/components/Steps";
import Features from "@/components/Features";
import Team from "@/components/Team";
import WaitlistFormNew from "@/components/WaitlistFormNew";
import SocialBanner from "@/components/SocialBanner";
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
        <Problem />
        <Solution />
        <Vision />
        <Steps />
        <Features />
        <Team />
        <div ref={waitlistRef}>
          <WaitlistFormNew />
        </div>
        <SocialBanner />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
