
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Microscope, Cpu, Globe, Zap, Star, Users, BrainCircuit, FlaskConical, Atom } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Labs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const labFeatures = [
    {
      icon: <FlaskConical className="h-6 w-6" />,
      title: "Space Innovation Labs",
      description: "Cutting-edge facilities for hands-on experimentation with space technology and simulations."
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Quantum Computing Workshop",
      description: "Introduction to quantum mechanics principles that power next-generation space computing."
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "AI & Space Exploration",
      description: "Learn how artificial intelligence is revolutionizing space missions and data analysis."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Propulsion Systems Lab",
      description: "Design and test miniature rocket engines and understand the physics of space travel."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Space-on-Wheels",
      description: "Mobile space learning units bringing hands-on education to schools without permanent labs."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Zero-G Problem-Solving",
      description: "Simulation workshops focused on engineering challenges in microgravity environments."
    }
  ];

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
                <Atom className="text-space-purple w-10 h-10 animate-pulse-glow" />
                <div className="absolute top-0 left-0 w-10 h-10 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h1 className="font-orbitron mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Astro-Tech Labs
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Explore cutting-edge space technology through immersive, hands-on learning experiences
                in our state-of-the-art laboratory facilities.
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-space-blue-light/20 rounded-2xl border border-space-purple/30 overflow-hidden backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-space-purple/20 text-space-purple text-xs mb-6 w-fit">
                      <FlaskConical className="w-3.5 h-3.5 mr-2" /> 
                      Futuristic Learning Environment
                    </div>
                    <h2 className="text-2xl font-orbitron mb-4">Next-Gen Space Technology Lab</h2>
                    <p className="text-gray-300 mb-6">
                      Our cutting-edge laboratory is equipped with advanced technology that simulates real space 
                      mission environments. Students engage with the same tools and techniques used by professionals 
                      at leading space agencies.
                    </p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {[
                        "VR Space Station Simulators",
                        "Satellite Design Workstations",
                        "Mission Control Replicas",
                        "Robotics Testing Facilities"
                      ].map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-space-purple rounded-full"></div>
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative h-64 md:h-auto rounded-xl overflow-hidden bg-space-blue-light/30">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-space-purple/20 flex items-center justify-center">
                        <Atom className="w-16 h-16 text-space-purple animate-pulse" />
                      </div>
                      <div className="absolute w-32 h-32 rounded-full border-2 border-space-purple/30 animate-pulse"></div>
                      <div className="absolute w-48 h-48 rounded-full border border-space-purple/20 animate-ping" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute w-64 h-64 rounded-full border border-space-purple/10 animate-ping" style={{ animationDuration: '4s' }}></div>
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
              <h2 className="text-2xl font-orbitron mb-8 text-center">Innovative Learning Experiences</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {labFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="bg-space-blue-light/30 border-space-purple/20 overflow-hidden h-full group hover:border-space-purple/50 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="mb-4 text-space-purple group-hover:text-space-neon transition-colors duration-300">
                          {feature.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-space-blue-light/20 border border-space-purple/20 rounded-2xl p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-space-purple/20 p-3 rounded-full">
                  <Star className="w-6 h-6 text-space-purple" />
                </div>
              </div>
              <h2 className="text-xl font-orbitron text-center mb-6">Ready for Launch</h2>
              <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
                Our labs are designed to spark curiosity and inspire the next generation of space innovators. 
                Join us on this exciting journey of discovery and exploration.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-6">
                  <h3 className="text-lg font-orbitron mb-4">Distinguished Speaker Program</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Users className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Regular visits from NASA scientists, astronauts, and space entrepreneurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Globe className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Virtual Q&A sessions with international space agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Star className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Mentorship opportunities with industry professionals</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-6">
                  <h3 className="text-lg font-orbitron mb-4">Industry Connections</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Rocket className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Internship pathways with leading space technology companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><BrainCircuit className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Research opportunities with university space departments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Zap className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Participation in international space challenges and competitions</span>
                    </li>
                  </ul>
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

export default Labs;
