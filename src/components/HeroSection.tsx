
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-cyber-city bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-b from-cyber-black/95 via-cyber-darkblue/80 to-cyber-black/90"></div>
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px]"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Glitch Badge */}
          <div className="inline-block mb-6 px-4 py-1 border border-cyber-blue text-cyber-blue text-sm tracking-wider bg-cyber-darkblue/50">
            <span className="animate-pulse">LIVE // 15TH APRIL 2025</span>
          </div>

          {/* Main Title - Glitch Effect */}
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold font-glitch mb-4 text-white relative"
            data-text="TAGx EVENT"
          >
            <span className="relative inline-block">
              <span className="relative animate-glitch">TAGx</span>
            </span>{" "}
            <span className="relative text-cyber-pink text-glow-pink">EVENT</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-cyber-blue font-cyber max-w-2xl mx-auto text-glow-blue">
            THE ULTIMATE CYBERPUNK EXPERIENCE
          </p>
          
          {/* Description */}
          <p className="text-base md:text-lg mb-12 text-gray-300 max-w-2xl mx-auto">
            Immerse yourself in the future with cutting-edge technology, mind-bending performances, and a night you'll never forget.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="cyberpunk-border bg-black text-cyber-yellow hover:text-cyber-black hover:bg-cyber-yellow transition-all duration-300"
            >
              GET YOUR PASS
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-cyber-blue border-cyber-blue hover:bg-cyber-blue/10 hover:shadow-neon-blue transition-all"
            >
              LEARN MORE
            </Button>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-[2px] h-16 mx-auto bg-gradient-to-b from-transparent via-cyber-blue to-transparent"></div>
            <p className="text-cyber-blue text-xs tracking-wider mt-2">SCROLL DOWN</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
