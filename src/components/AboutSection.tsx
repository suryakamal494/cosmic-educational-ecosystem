
import React from 'react';
import { Sparkles, Rocket, Star, Orbit } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-space-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block relative">
              <Sparkles className="text-space-purple w-8 h-8" />
              <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-lg animate-pulse-glow"></div>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-orbitron font-bold mt-4 mb-4">
              About iSPACE
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mb-8"></div>
          </div>
          
          <div className="bg-card-gradient p-8 md:p-12 rounded-2xl border border-space-purple/20 backdrop-blur-sm shadow-xl">
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              iSPACE is India's premier space education initiative dedicated to transforming how young minds engage with and contribute to space science. We bridge the gap between theoretical learning and practical applications, nurturing the skills and passion needed for the next generation of innovators.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="border border-space-purple/30 rounded-lg p-5 bg-space-blue-light/30 backdrop-blur-sm hover:bg-space-blue-light/40 hover:border-space-purple/50 transition-all duration-300"
              >
                <h3 className="font-orbitron text-xl mb-3 text-white">Hands-on Learning</h3>
                <p className="text-gray-300">From rover models to rocket launches, we emphasize practical experience in all our programs.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="border border-space-purple/30 rounded-lg p-5 bg-space-blue-light/30 backdrop-blur-sm hover:bg-space-blue-light/40 hover:border-space-purple/50 transition-all duration-300"
              >
                <h3 className="font-orbitron text-xl mb-3 text-white">Expert Connections</h3>
                <p className="text-gray-300">Students interact directly with leading scientists, astronauts, and space industry pioneers.</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="border border-space-purple/30 rounded-lg p-5 bg-space-blue-light/30 backdrop-blur-sm hover:bg-space-blue-light/40 hover:border-space-purple/50 transition-all duration-300"
              >
                <h3 className="font-orbitron text-xl mb-3 text-white">Global Exposure</h3>
                <p className="text-gray-300">International trips and collaborations provide students with a global perspective on space exploration.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
