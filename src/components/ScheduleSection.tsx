
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ScheduleItemProps {
  time: string;
  title: string;
  description: string;
}

const ScheduleItem: React.FC<ScheduleItemProps> = ({ time, title, description }) => {
  return (
    <div className="mb-8 relative group">
      <div className="absolute left-0 top-0 w-px h-full bg-cyber-blue/40 group-hover:bg-cyber-blue transition-colors duration-300"></div>
      <div className="absolute left-0 top-6 w-3 h-3 rounded-full border-2 border-cyber-blue bg-cyber-black transform -translate-x-1/2 group-hover:scale-125 transition-transform duration-300"></div>
      <div className="pl-8">
        <span className="text-cyber-blue text-sm font-mono">{time}</span>
        <h3 className="text-xl font-bold text-white group-hover:text-cyber-yellow transition-colors duration-300">{title}</h3>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const ScheduleSection: React.FC = () => {
  return (
    <section id="schedule" className="py-20 relative bg-gradient-to-b from-cyber-darkblue/50 to-cyber-black">
      <div className="absolute inset-0 bg-cyber-grid bg-[length:50px_50px] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-cyber mb-4 text-white">
            <span className="text-glow-yellow">EVENT SCHEDULE</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Plan your experience at TAGx Event
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="main-stage" className="w-full">
            <div className="mb-8 flex justify-center">
              <TabsList className="bg-cyber-black/60 border border-cyber-blue/30">
                <TabsTrigger value="main-stage" className="data-[state=active]:bg-cyber-blue/20 data-[state=active]:text-cyber-blue data-[state=active]:shadow-none">
                  MAIN STAGE
                </TabsTrigger>
                <TabsTrigger value="tech-zone" className="data-[state=active]:bg-cyber-pink/20 data-[state=active]:text-cyber-pink data-[state=active]:shadow-none">
                  TECH ZONE
                </TabsTrigger>
                <TabsTrigger value="vr-lounge" className="data-[state=active]:bg-cyber-yellow/20 data-[state=active]:text-cyber-yellow data-[state=active]:shadow-none">
                  VR LOUNGE
                </TabsTrigger>
              </TabsList>
            </div>
            
            <div className="p-6 bg-cyber-black/40 backdrop-blur-sm rounded-lg border border-white/10">
              <TabsContent value="main-stage" className="mt-0">
                <div className="space-y-0">
                  <ScheduleItem
                    time="20:00"
                    title="Opening Ceremony"
                    description="Welcome to TAGx Event with a spectacular laser and holographic show."
                  />
                  <ScheduleItem
                    time="21:00"
                    title="DJ Neural Network"
                    description="The most advanced AI DJ bringing you futuristic beats."
                  />
                  <ScheduleItem
                    time="23:00"
                    title="Cyber Orchestra Live"
                    description="A unique mix of classical instruments and electronic sounds."
                  />
                  <ScheduleItem
                    time="01:00"
                    title="Neon Dreams Performance"
                    description="Visual and audio experience that will transcend your reality."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="tech-zone" className="mt-0">
                <div className="space-y-0">
                  <ScheduleItem
                    time="20:30"
                    title="Neural Interface Demo"
                    description="Experience controlling devices with your mind."
                  />
                  <ScheduleItem
                    time="22:00"
                    title="Holographic Art Creation"
                    description="Interactive session where you can create 3D holographic art."
                  />
                  <ScheduleItem
                    time="00:00"
                    title="Drone Light Show Workshop"
                    description="Learn how to program and choreograph drone light patterns."
                  />
                  <ScheduleItem
                    time="02:00"
                    title="Future Tech Panel Discussion"
                    description="Industry experts discuss the next wave of cybernetic innovations."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="vr-lounge" className="mt-0">
                <div className="space-y-0">
                  <ScheduleItem
                    time="20:00"
                    title="Virtual Reality Open Play"
                    description="Try out the latest VR experiences and games."
                  />
                  <ScheduleItem
                    time="21:30"
                    title="Cyberspace Meditation"
                    description="Guided meditation in a digital zen environment."
                  />
                  <ScheduleItem
                    time="23:30"
                    title="Multiplayer VR Tournament"
                    description="Compete in teams in a cyberpunk-themed VR challenge."
                  />
                  <ScheduleItem
                    time="01:30"
                    title="VR Dance Party"
                    description="Join a virtual club where your avatar can dance to the beats."
                  />
                </div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-40 h-40 rounded-full bg-cyber-yellow/10 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-cyber-blue/10 blur-3xl"></div>
    </section>
  );
};

export default ScheduleSection;
