
import React from 'react';
import { Rocket, Globe, Users, LightbulbIcon, Telescope } from 'lucide-react';
import ProgramCard from './ProgramCard';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ProgramsSection: React.FC = () => {
  const programs = [
    {
      title: 'International Space Programs 🌍',
      description: 'Connect with top foreign universities and global space agencies through our international collaborations.',
      icon: <Globe className="w-10 h-10" />,
      linkUrl: '/expeditions',
    },
    {
      title: 'DIY Space Projects 🛠️',
      description: 'Build Mars rovers, drones, robotics and other hands-on space projects to apply theoretical knowledge.',
      icon: <Rocket className="w-10 h-10" />,
      linkUrl: '/programs',
    },
    {
      title: 'Distinguished Speaker Series 🎤',
      description: 'Learn from experts from NASA, ISRO and other space agencies through our speaker sessions.',
      icon: <Users className="w-10 h-10" />,
      linkUrl: '/labs',
    },
    {
      title: 'Hands-on Learning & Space Challenges 🔬',
      description: 'Engage in immersive learning experiences and compete in space-themed challenges and hackathons.',
      icon: <LightbulbIcon className="w-10 h-10" />,
      linkUrl: '/programs',
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Telescope Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-5xl mb-20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-space-purple/10 via-space-blue-light/30 to-space-purple/10 rounded-2xl blur-xl"></div>
          
          <div className="relative bg-space-blue-light/20 backdrop-blur-xl border border-space-purple/30 rounded-2xl p-8 md:p-10 shadow-xl overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-space-purple/10 blur-xl"></div>
            
            <div className="flex items-center lg:items-start flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <img 
                  src="/lovable-uploads/f5e1fc64-ed01-4b5f-9f79-6ab919656fa7.png" 
                  alt="Orion Nebula"
                  className="w-full h-auto rounded-xl shadow-lg border border-space-purple/20"
                />
              </div>
              
              <div className="lg:w-2/3 text-center lg:text-left">
                <div className="inline-block">
                  <Telescope className="h-8 w-8 text-space-purple animate-pulse-glow" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                  Grab the Cosmos with Telescopes!
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto lg:mx-0 mt-4"></div>
                
                <p className="text-gray-300 my-6">
                  Ever dreamed of capturing galaxies, planets, and nebulae? With iSpace, you control real telescopes worldwide to snap cosmic wonders in real time. Ready to explore the universe?
                </p>
                
                <Button
                  asChild
                  className="space-button group"
                >
                  <Link to="/astronomy" className="flex items-center gap-2">
                    Explore Now
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programs Overview
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive space education programs are designed to inspire and equip the next generation of space pioneers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program, index) => (
            <ProgramCard
              key={index}
              title={program.title}
              description={program.description}
              icon={program.icon}
              linkUrl={program.linkUrl}
            />
          ))}
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 left-0 w-32 h-32 bg-space-purple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-40 h-40 bg-space-neon/5 rounded-full blur-3xl" />
    </section>
  );
};

export default ProgramsSection;
