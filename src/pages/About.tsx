
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Rocket, Target, Sparkles, LineChart, Briefcase, GraduationCap, Globe, Users, Award, ChartBar, Orbit, Atom, FlaskConical } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-24 pb-20 relative z-10">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block relative mb-4">
                <Star className="text-space-purple w-8 h-8 animate-pulse-glow" />
                <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h1 className="font-orbitron mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Stellar Origins
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover the vision and mission behind iSPACE, and our journey to make space education accessible to all young minds.
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-gradient-to-br from-space-blue-light/30 to-space-blue/80 rounded-2xl border border-space-purple/30 overflow-hidden backdrop-blur-sm p-8 relative">
                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-24 h-24 rounded-full border border-space-purple/20 animate-orbit">
                  <div className="absolute top-0 w-4 h-4 bg-space-purple/40 rounded-full"></div>
                </div>
                <div className="absolute bottom-8 left-8 opacity-20">
                  <Orbit className="w-32 h-32 text-space-purple-light" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-12 relative z-10">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-space-purple/20 text-space-purple text-xs mb-6">
                      <Rocket className="w-3.5 h-3.5 mr-2" /> Our Journey
                    </div>
                    <h2 className="text-2xl font-orbitron mb-4">The iSPACE Story</h2>
                    <p className="text-gray-300 mb-6">
                      Founded by visionary space enthusiasts and educators, iSPACE emerged from a simple yet powerful idea: space education should be accessible, engaging, and inspiring for every young mind regardless of their background or resources.
                    </p>
                    <p className="text-gray-300 mb-6">
                      Our founders, including former NASA scientists and educational specialists, recognized the growing importance of space technology in our future and the critical need to prepare the next generation of innovators.
                    </p>
                    <div className="flex items-center gap-3 text-space-purple">
                      <Target className="w-5 h-5" />
                      <span className="text-sm font-medium">Established in 2021</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-center">
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { icon: <Rocket className="w-8 h-8" />, label: "Innovation" },
                        { icon: <Star className="w-8 h-8" />, label: "Discovery" },
                        { icon: <GraduationCap className="w-8 h-8" />, label: "Education" },
                        { icon: <Globe className="w-8 h-8" />, label: "Global Reach" }
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index + 0.5 }}
                          className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-4 flex flex-col items-center text-center hover:border-space-purple/30 transition-all duration-300"
                        >
                          <div className="text-space-purple mb-2">{item.icon}</div>
                          <span className="text-sm font-orbitron">{item.label}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <h2 className="text-2xl font-orbitron mb-8 text-center">Space Industry Insights</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    value: "$3T",
                    label: "The space industry is projected to be worth $3 trillion by 2040",
                    icon: <ChartBar className="w-6 h-6 text-space-purple" />
                  },
                  {
                    value: "$100B",
                    label: "India aims to expand its space economy to $100 billion by 2040",
                    icon: <LineChart className="w-6 h-6 text-space-purple" />
                  },
                  {
                    value: "10%",
                    label: "Increasing global market share from 3.6% to 10% by 2030",
                    icon: <Globe className="w-6 h-6 text-space-purple" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                    className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-6 flex flex-col items-center text-center hover:border-space-purple/30 transition-all duration-300 hover:bg-space-blue-light/40"
                  >
                    <div className="w-12 h-12 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                      {typeof item.value === 'string' ? (
                        <span className="text-xl font-bold text-space-purple">{item.value}</span>
                      ) : (
                        item.icon
                      )}
                    </div>
                    <p className="text-sm text-gray-300">
                      {item.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-space-blue-light/20 rounded-2xl border border-space-purple/20 p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center relative">
                  <Target className="text-space-purple w-8 h-8" />
                  <div className="absolute inset-0 rounded-full border-2 border-space-purple/30 animate-pulse"></div>
                </div>
              </div>
              
              <h2 className="text-2xl font-orbitron text-center mb-4">Mission & Vision</h2>
              <p className="text-gray-300 text-center max-w-2xl mx-auto mb-8">
                To inspire and equip young learners with skills in space science, fostering India's next generation of space innovators.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: <FlaskConical className="w-6 h-6" />, label: "Innovation", description: "Fostering creative problem-solving through space science" },
                  { icon: <GraduationCap className="w-6 h-6" />, label: "Education", description: "Making space science accessible to all students" },
                  { icon: <Atom className="w-6 h-6" />, label: "Exploration", description: "Encouraging curiosity and the spirit of discovery" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index + 0.7 }}
                    className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 text-center flex flex-col items-center hover:border-space-purple/30 transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-full bg-space-purple/20 flex items-center justify-center mb-3">
                      {item.icon}
                    </div>
                    <p className="text-sm font-orbitron text-space-purple-light mb-2">{item.label}</p>
                    <p className="text-xs text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
              
              <div className="flex justify-center">
                <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg p-6 max-w-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-space-purple" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1">Our Commitment</h3>
                      <p className="text-gray-300 text-sm">
                        We are dedicated to bridging the gap between theoretical knowledge and practical applications in space science education. Through our innovative programs, we aim to inspire curiosity, foster creativity, and develop the skills needed for the next generation of space pioneers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
