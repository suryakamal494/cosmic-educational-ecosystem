
import React from 'react';
import { Rocket, Globe, Users, LightbulbIcon, Award, BookOpen, BrainCircuit, MapPin } from 'lucide-react';
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
    { number: "100+", label: "DIY Space Projects", icon: <BookOpen className="h-6 w-6 text-space-purple" /> },
    { number: "12", label: "Expert Talks Per Year", icon: <Users className="h-6 w-6 text-space-purple" /> },
    { number: "2", label: "Space Hackathons", icon: <BrainCircuit className="h-6 w-6 text-space-purple" /> },
    { number: "2+", label: "International Trips", icon: <MapPin className="h-6 w-6 text-space-purple" /> },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Programs Overview
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Our comprehensive space education programs are designed to inspire and equip the next generation of space pioneers.
          </p>
        </div>

        {/* Key Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-space-blue-light/20 backdrop-blur-sm border border-space-purple/20 rounded-xl p-4 md:p-6 text-center hover:border-space-purple/40 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <div className="mx-auto mb-3 w-12 h-12 flex items-center justify-center rounded-full bg-space-purple/10">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-orbitron font-bold mb-1 text-white">{stat.number}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

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
