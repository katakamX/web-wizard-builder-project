
import React, { useEffect } from "react";
import CyberNav from "@/components/CyberNav";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import ScheduleSection from "@/components/ScheduleSection";
import CTASection from "@/components/CTASection";
import CyberFooter from "@/components/CyberFooter";

const Index = () => {
  // Create the scanline effect element when component mounts
  useEffect(() => {
    const scanlines = document.createElement('div');
    scanlines.className = 'scanlines';
    document.body.appendChild(scanlines);
    
    return () => {
      document.body.removeChild(scanlines);
    };
  }, []);

  return (
    <div className="min-h-screen bg-cyber-black text-white">
      <CyberNav />
      <HeroSection />
      <InfoSection />
      <ScheduleSection />
      <CTASection />
      <CyberFooter />
      
      {/* Noise overlay */}
      <div className="fixed inset-0 pointer-events-none z-[1] bg-[url('/noise.png')] opacity-5"></div>
    </div>
  );
};

export default Index;
