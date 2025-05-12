
import React from 'react';
import { Link } from 'react-router-dom';

const PartnershipsSection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden bg-space-blue-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our <span className="text-space-purple">Partners</span>
        </h2>
        
        {/* Glow elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl" />
        
        <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
          {/* Maxme */}
          <Link 
            to="/partnerships/maxme" 
            className="group relative flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="w-48 h-48 bg-[#5935E8] flex items-center justify-center rounded-lg p-4 shadow-lg">
              <img 
                src="/lovable-uploads/520695e1-5650-4379-9d36-7a0b7dff76fc.png" 
                alt="Maxme Logo" 
                className="w-full"
              />
            </div>
            <span className="mt-4 text-xl font-semibold group-hover:text-space-purple-light transition-colors">
              Maxme
            </span>
          </Link>
          
          {/* Taramandal */}
          <Link 
            to="/partnerships/taramandal" 
            className="group relative flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg p-4 shadow-lg">
              <img 
                src="/lovable-uploads/99bfe2a0-c134-499b-aa87-79f58581c00f.png" 
                alt="Taramandal Logo" 
                className="w-full"
              />
            </div>
            <span className="mt-4 text-xl font-semibold group-hover:text-space-purple-light transition-colors">
              Taramandal
            </span>
          </Link>
          
          {/* Centurion University */}
          <Link 
            to="/partnerships/centurion" 
            className="group relative flex flex-col items-center transition-transform hover:scale-105"
          >
            <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg p-4 shadow-lg">
              <img 
                src="/lovable-uploads/555d04bc-f6f4-4fb6-9b57-e6ff9cffa707.png" 
                alt="Centurion University Logo" 
                className="w-full"
              />
            </div>
            <span className="mt-4 text-xl font-semibold group-hover:text-space-purple-light transition-colors">
              Centurion University
            </span>
          </Link>
        </div>
        
        <p className="text-center text-gray-300 mt-10 max-w-2xl mx-auto">
          We're proud to collaborate with industry leaders to provide cutting-edge educational experiences in space science and technology.
        </p>
      </div>
    </section>
  );
};

export default PartnershipsSection;
