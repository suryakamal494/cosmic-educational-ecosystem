
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  const stats = [
    { value: "100+", label: "DIY Space Projects" },
    { value: "12+", label: "Expert Talks" },
    { value: "2", label: "International Trips" },
    { value: "3+", label: "Specialized Courses" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated celestial objects */}
      <div className="absolute w-32 h-32 rounded-full bg-space-purple/20 blur-2xl -top-10 -left-10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute w-40 h-40 rounded-full bg-space-neon/10 blur-3xl top-1/2 -right-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute w-24 h-24 rounded-full bg-space-purple-light/10 blur-xl bottom-20 left-20 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Planetary object */}
      <div className="absolute top-20 right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-space-blue-light via-space-purple/30 to-space-blue opacity-60 animate-float hidden md:block">
        <div className="absolute inset-0 rounded-full border border-space-purple/20 backdrop-blur-sm" />
        <div className="absolute top-5 left-5 w-4 h-4 bg-space-neon/50 rounded-full blur-sm" />
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-space-purple/30 rounded-full blur-sm" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
              Young Scientist Initiative
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          >
            Enrich Your School's Curriculum with Engaging Space & STEM Programs
          </motion.p>
          
          {/* Stats Section - Prominent Display */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12 relative"
          >
            <div className="absolute inset-0 bg-space-purple/5 blur-xl rounded-2xl"></div>
            
            <div className="relative grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 bg-space-blue-light/20 backdrop-blur-md border border-space-purple/20 rounded-xl p-6 shadow-lg">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index + 0.4 }}
                  className="flex flex-col items-center justify-center text-center bg-space-blue/50 border border-space-purple/30 rounded-lg p-4 hover:bg-space-blue/70 transition-all duration-300"
                >
                  <span className="text-3xl md:text-4xl font-orbitron font-bold text-white mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm text-space-purple-light">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center"
          >
            {/* <Button 
              asChild
              className="space-button group"
            >
              <a href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button> */}
            <Button asChild className="space-button group">
              <Link to={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>




          </motion.div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-blue to-transparent" />
    </div>
  );
};

export default HeroSection;
