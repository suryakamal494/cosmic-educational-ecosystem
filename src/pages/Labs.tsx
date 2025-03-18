
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Microscope, Cpu, Globe, Zap, Star, Users, BrainCircuit, FlaskConical, Atom, Check, Award, CalendarClock, MapPin, School, BookOpen } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

const Labs = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  
  const offerings = [
    {
      icon: <BookOpen className="h-5 w-5" />,
      title: "100 DIY Space Projects",
      description: "Hands-on learning through buildable models, experiments, and simulations"
    },
    {
      icon: <BrainCircuit className="h-5 w-5" />,
      title: "2 Space Hackathons",
      description: "Intensive problem-solving competitions focused on space challenges"
    },
    {
      icon: <Users className="h-5 w-5" />,
      title: "12 Expert Talks (Hybrid)",
      description: "Regular sessions with space scientists, astronauts, and industry leaders"
    },
    {
      icon: <Star className="h-5 w-5" />,
      title: "Science Exhibition",
      description: "Annual showcase of student projects and innovations"
    },
    {
      icon: <Rocket className="h-5 w-5" />,
      title: "Space on Wheels",
      description: "Mobile space learning experience for community engagement"
    },
    {
      icon: <Zap className="h-5 w-5" />,
      title: "Creative Problem Solving",
      description: "Workshop by International Experts from USA & Finland"
    },
    {
      icon: <Globe className="h-5 w-5" />,
      title: "2 International Events",
      description: "Participation in global space education conferences and competitions"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Minimum 2 International Trips",
      description: "Visits to leading space facilities worldwide (travel costs borne by school)"
    }
  ];

  const facilities = [
    "State-of-the-Art Space Lab with specialized equipment",
    "Space Facility Visits to observatories, aerospace centers",
    "VR Space Station Simulators",
    "Satellite Design Workstations",
    "Mission Control Replicas",
    "Robotics Testing Facilities"
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
              
              <h1 className="font-orbitron mb-4 text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Astro-Tech Labs
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Transforming education through cutting-edge space technology and immersive learning experiences.
                Our comprehensive lab solutions bring the wonders of space exploration to your school.
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="bg-space-blue-light/10 rounded-2xl border border-space-purple/20 overflow-hidden backdrop-blur-sm shadow-lg">
                <div className="grid md:grid-cols-2 gap-6 p-8">
                  <div className="flex flex-col justify-center">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-space-purple/20 text-space-purple-light text-xs mb-6 w-fit">
                      <School className="w-3.5 h-3.5 mr-2" /> 
                      Educational Excellence for Schools
                    </div>
                    <h2 className="text-2xl font-orbitron mb-4">Complete Space Education Solution</h2>
                    <p className="text-gray-300 mb-6">
                      Our Astro-Tech Labs provide schools with a complete turnkey solution for space education, 
                      offering students access to the same advanced technologies used by professionals at 
                      leading space agencies.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {facilities.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="mt-0.5 text-space-purple">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-sm text-gray-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="relative h-64 md:h-auto rounded-xl overflow-hidden bg-space-blue-light/10 border border-space-purple/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 rounded-full bg-space-purple/10 flex items-center justify-center">
                        <Atom className="w-16 h-16 text-space-purple animate-pulse" />
                      </div>
                      <div className="absolute w-32 h-32 rounded-full border-2 border-space-purple/20 animate-pulse"></div>
                      <div className="absolute w-48 h-48 rounded-full border border-space-purple/10 animate-ping" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute w-64 h-64 rounded-full border border-space-purple/5 animate-ping" style={{ animationDuration: '4s' }}></div>
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
              <h2 className="text-2xl font-orbitron mb-2 text-center">What Schools Receive</h2>
              <p className="text-center text-gray-300 mb-8">Our comprehensive program includes everything schools need to deliver world-class space education</p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {offerings.map((offering, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <Card className="bg-space-blue-light/5 border-space-purple/10 overflow-hidden h-full group hover:border-space-purple/30 transition-all duration-300 shadow-md hover:shadow-lg">
                      <CardContent className="p-5">
                        <div className="bg-space-purple/10 w-10 h-10 rounded-full flex items-center justify-center mb-4 text-space-purple group-hover:text-space-purple-light transition-colors duration-300">
                          {offering.icon}
                        </div>
                        <h3 className="text-base font-semibold mb-2">{offering.title}</h3>
                        <p className="text-gray-300 text-sm">{offering.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-space-blue-light/10 border border-space-purple/10 rounded-2xl p-8 backdrop-blur-sm shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <div className="flex justify-center mb-6">
                <div className="bg-space-purple/10 p-3 rounded-full">
                  <Award className="w-6 h-6 text-space-purple" />
                </div>
              </div>
              <h2 className="text-xl font-orbitron text-center mb-6">Ready for Launch</h2>
              <p className="text-center text-gray-300 max-w-3xl mx-auto mb-8">
                Partner with iSPACE to bring the excitement of space exploration to your school. 
                Our comprehensive lab solutions are designed to inspire students and transform education.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-space-blue-light/5 border border-space-purple/10 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-orbitron mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5 text-space-purple" />
                    <span>Distinguished Speaker Program</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Check className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Regular visits from NASA scientists, astronauts, and space entrepreneurs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Check className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Virtual Q&A sessions with international space agencies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Check className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Mentorship opportunities with industry professionals</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-space-blue-light/5 border border-space-purple/10 rounded-lg p-6 shadow-md">
                  <h3 className="text-lg font-orbitron mb-4 flex items-center gap-2">
                    <Rocket className="w-5 h-5 text-space-purple" />
                    <span>Industry Connections</span>
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Check className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Internship pathways with leading space technology companies</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Check className="h-4 w-4" /></div>
                      <span className="text-gray-300 text-sm">Research opportunities with university space departments</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 text-space-purple"><Check className="h-4 w-4" /></div>
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
