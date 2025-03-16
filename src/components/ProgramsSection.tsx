
import React from 'react';
import { Rocket, Globe, Users, LightbulbIcon } from 'lucide-react';
import ProgramCard from './ProgramCard';

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
