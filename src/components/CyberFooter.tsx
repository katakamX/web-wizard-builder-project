
import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const CyberFooter: React.FC = () => {
  return (
    <footer className="bg-cyber-black border-t border-cyber-blue/30 text-gray-400">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 font-cyber">TAGx<span className="text-cyber-blue">EVENT</span></h3>
            <p className="mb-4">
              The ultimate cyberpunk experience. A night of technology, art, and futuristic entertainment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyber-blue transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyber-blue transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyber-blue transition-colors">About</a></li>
              <li><a href="#schedule" className="hover:text-cyber-blue transition-colors">Schedule</a></li>
              <li><a href="#location" className="hover:text-cyber-blue transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>The Neon District</li>
              <li>420 Circuit Avenue</li>
              <li>Night City, NC 98765</li>
              <li className="text-cyber-blue">info@tagxevent.com</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2025 TAGx Event. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-600 hover:text-cyber-blue mr-4">Privacy Policy</a>
            <a href="#" className="text-sm text-gray-600 hover:text-cyber-blue">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CyberFooter;
