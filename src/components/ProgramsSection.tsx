
import React from 'react';
import { Rocket, Globe, Users, LightbulbIcon, Award, BookOpen, BrainCircuit, MapPin, Orbit, Star } from 'lucide-react';
import ProgramCard from './ProgramCard';
import { motion } from 'framer-motion';

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

  const stats = [
    { number: "100+", label: "DIY Space Projects", icon: <BookOpen className="h-6 w-6 text-space-neon" /> },
    { number: "12+", label: "Expert Talks Per Year", icon: <Users className="h-6 w-6 text-space-neon" /> },
    { number: "2", label: "Space Hackathons", icon: <BrainCircuit className="h-6 w-6 text-space-neon" /> },
    { number: "2+", label: "International Trips", icon: <MapPin className="h-6 w-6 text-space-neon" /> },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Featured Stats Section */}
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
            <div className="absolute top-0 right-10 opacity-10">
              <Orbit className="w-32 h-32 text-space-neon" />
            </div>
            
            <div className="text-center mb-8">
              <div className="inline-block">
                <Star className="h-8 w-8 text-space-purple animate-pulse-glow" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mt-2">
                What We Offer to Schools
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mt-4"></div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center bg-gradient-to-b from-space-blue-light/30 to-transparent border border-space-purple/30 rounded-xl p-6 hover:shadow-lg hover:border-space-purple/50 transition-all duration-300"
                >
                  <div className="bg-space-blue-light/50 p-3 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-4xl md:text-5xl font-orbitron font-bold bg-gradient-to-r from-space-purple-light via-white to-space-neon bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-sm text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
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
