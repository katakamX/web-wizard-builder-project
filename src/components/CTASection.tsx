
import React from "react";
import { Button } from "@/components/ui/button";

const CTASection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-darkblue to-cyber-black">
        <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-30"></div>
      </div>
      
      {/* Decorative holographic elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-blue/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-pink/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center holographic">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-cyber text-white">
            <span className="text-cyber-yellow text-glow-yellow">JOIN THE FUTURE</span>
          </h2>
          
          <p className="text-xl mb-8 text-gray-300">
            Limited passes available. Secure your spot at the most exclusive cyberpunk event of the year before they're gone.
          </p>
          
          <div className="inline-block mb-8">
            <div className="cyberpunk-border p-6 bg-cyber-black/60 backdrop-blur-md">
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <div className="text-left">
                  <p className="text-cyber-blue font-mono mb-1">EARLY BIRD TICKETS</p>
                  <p className="text-3xl font-bold text-white">$85 <span className="text-lg text-gray-400">per person</span></p>
                </div>
                <Button size="lg" className="bg-cyber-blue hover:bg-cyber-blue/80 text-cyber-black hover:shadow-neon-blue">
                  BUY TICKETS NOW
                </Button>
              </div>
            </div>
          </div>
          
          <p className="text-cyber-pink text-sm font-mono">* INCLUDES ACCESS TO ALL AREAS AND ONE FREE DRINK</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
