
import React from 'react';
import { Sparkles, Rocket, Star, Orbit, Brain, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <Rocket />,
      title: "Hands-on Learning",
      description: "From rover models to rocket launches, we emphasize practical experience in all our programs."
    },
    {
      icon: <Star />,
      title: "Expert Connections",
      description: "Students interact directly with leading scientists, astronauts, and space industry pioneers."
    },
    {
      icon: <Globe />,
      title: "Global Exposure",
      description: "International trips and collaborations provide students with a global perspective on space exploration."
    },
    {
      icon: <Brain />,
      title: "Future-Ready Skills",
      description: "Students develop critical thinking, problem-solving, and innovation skills essential for the space age."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-space-gradient opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block relative mb-4"
          >
            <Sparkles className="text-space-purple w-8 h-8" />
            <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-lg animate-pulse-glow"></div>
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
            What Makes iSPACE Different
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mb-8"></div>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We're transforming how students engage with space science through a unique approach that combines innovation, real-world experience, and global perspective.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-gradient-to-br from-space-blue-light/40 to-space-blue/95 backdrop-blur-sm border border-space-purple/20 rounded-xl p-6 hover:border-space-purple/40 transition-all duration-300 shadow-lg group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-space-blue-light/50 p-4 rounded-full mb-5 text-space-purple group-hover:text-space-purple-light transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-orbitron text-xl mb-3 group-hover:text-space-purple-light transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
