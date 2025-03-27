
import React from 'react';
import { RocketIcon } from 'lucide-react';
import { Link } from "react-router-dom";

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-hero-gradient opacity-50" />
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-space-neon blur-md animate-pulse-glow" />
              <RocketIcon className="w-10 h-10 text-white relative z-10" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Launch Your Space Education Program?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enrich Your School's Curriculum with Engaging Space & STEM Programs
          </p>
          
          <div className="inline-flex">
            <Link to="/contact" className="glow-effect">
              <span className="relative block px-6 py-3 bg-space-purple text-white font-orbitron font-medium rounded-lg z-10">
                Contact Us Today
              </span>
            </Link>
          </div>
          
          {/* Logo at the bottom */}
          <div className="mt-20 flex justify-center">
            <img 
              src="/lovable-uploads/f748a22e-8773-4bec-8d73-9961263c267b.png" 
              alt="iSpace Logo" 
              className="max-w-[250px] mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
