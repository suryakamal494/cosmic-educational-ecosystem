
import React from 'react';
import { Sparkles } from 'lucide-react';

const VisionSection: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-space-gradient opacity-30" />
      
      {/* Floating objects */}
      <div className="absolute left-10 top-20 w-16 h-16 rounded-full border border-space-purple/30 animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute right-20 bottom-40 w-24 h-24 rounded-full border border-space-neon/20 animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto bg-card-gradient p-8 md:p-12 rounded-2xl border border-space-purple/20 backdrop-blur-sm">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center">
              <Sparkles className="text-space-purple w-8 h-8" />
            </div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
            Our Vision
          </h2>
          
          <p className="text-gray-300 text-lg mb-6 text-center">
            We empower schools to provide top-notch space education through our expert-driven curriculum, international collaborations, and hands-on learning experiences. Our programs are designed to inspire the next generation of space pioneers by integrating cutting-edge space science into school education.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="border border-space-purple/30 rounded-lg p-5 bg-space-blue-light/50 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl mb-3 text-white">Future Relevance</h3>
              <p className="text-gray-300">Space technology is increasingly influencing industries across the globe.</p>
            </div>
            
            <div className="border border-space-purple/30 rounded-lg p-5 bg-space-blue-light/50 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl mb-3 text-white">STEM Enhancement</h3>
              <p className="text-gray-300">Our program strengthens students' skills in mathematics, physics, reasoning, and coding.</p>
            </div>
            
            <div className="border border-space-purple/30 rounded-lg p-5 bg-space-blue-light/50 backdrop-blur-sm">
              <h3 className="font-orbitron text-xl mb-3 text-white">Career Readiness</h3>
              <p className="text-gray-300">Practical exposure to high-demand careers in the space industry and adjacent fields.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
