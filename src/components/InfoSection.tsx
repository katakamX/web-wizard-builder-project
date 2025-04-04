
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Clock, MapPin, Music, Zap } from "lucide-react";

const EventCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}> = ({ title, description, icon, color }) => {
  return (
    <Card className={`bg-cyber-black/60 border border-${color}/30 backdrop-blur-sm hover:shadow-neon-${color} transition-all duration-300 h-full`}>
      <CardHeader className="pb-2">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 bg-${color}/10 text-${color}`}>
          {icon}
        </div>
        <CardTitle className={`text-${color} text-xl font-bold`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  );
};

const InfoSection: React.FC = () => {
  return (
    <section id="about" className="py-20 relative bg-cyber-black/90">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-3xl md:text-4xl font-bold font-cyber mb-4 text-white relative pb-2 border-b-2 border-cyber-purple">
            <span className="text-glow-pink">EVENT INFO</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about the most anticipated cyberpunk event of the year
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <EventCard
            title="DATE & TIME"
            description="15th April, 2025. Doors open at 8:00 PM. Event runs until 3:00 AM."
            icon={<Clock className="w-6 h-6" />}
            color="cyber-blue"
          />
          <EventCard
            title="LOCATION"
            description="The Neon District, 420 Circuit Avenue, Night City, NC 98765"
            icon={<MapPin className="w-6 h-6" />}
            color="cyber-pink"
          />
          <EventCard
            title="PERFORMANCES"
            description="Live electronic music, digital art exhibits, and interactive experiences."
            icon={<Music className="w-6 h-6" />}
            color="cyber-yellow"
          />
          <EventCard
            title="TECH SHOWCASE"
            description="Experience cutting-edge technology demos and futuristic innovations."
            icon={<Zap className="w-6 h-6" />}
            color="cyber-purple"
          />
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-blue to-transparent"></div>
      <div className="absolute -bottom-10 right-20 w-20 h-20 bg-cyber-blue/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-10 left-20 w-20 h-20 bg-cyber-purple/20 rounded-full blur-3xl"></div>
    </section>
  );
};

export default InfoSection;
