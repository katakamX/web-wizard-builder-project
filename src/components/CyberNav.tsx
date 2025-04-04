
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink = ({ href, children, className }: NavLinkProps) => (
  <a 
    href={href} 
    className={cn(
      "px-4 py-2 text-white relative group transition-all duration-300",
      className
    )}
  >
    <span className="relative z-10">{children}</span>
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyber-blue group-hover:w-full transition-all duration-300"></span>
  </a>
);

const CyberNav: React.FC = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-black/50 backdrop-blur-md border-b border-cyber-blue/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-cyber-blue text-glow-blue">
              TAGx
            </a>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:block">
            <div className="flex space-x-2">
              <NavLink href="#about">ABOUT</NavLink>
              <NavLink href="#schedule">SCHEDULE</NavLink>
              <NavLink href="#location">LOCATION</NavLink>
              <NavLink href="#contact">CONTACT</NavLink>
            </div>
          </nav>
          
          {/* CTA Button */}
          <div>
            <Button 
              className="bg-transparent border border-cyber-yellow text-cyber-yellow hover:bg-cyber-yellow/10 hover:shadow-neon-yellow transition-all"
            >
              REGISTER NOW
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CyberNav;
