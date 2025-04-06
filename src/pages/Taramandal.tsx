
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket, Shield, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Taramandal = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-28 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Header section */}
          <motion.div 
            className="flex flex-col items-center text-center mb-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <div className="w-32 h-32 mb-6 p-2 bg-white rounded-lg flex items-center justify-center">
              <img 
                src="/lovable-uploads/3e42de9b-22b8-4fb9-8f85-15508f9e112f.png" 
                alt="Taramandal Logo" 
                className="w-full"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Taramandal Partnership
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              From Orbit to Earth: Bringing cutting-edge space technology and education to young minds
            </p>
          </motion.div>
          
          {/* Partnership overview */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16 items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="md:col-span-3">
              <Card className="bg-space-blue-light/30 backdrop-blur-sm border border-space-purple/20 overflow-hidden">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4">Bridging the Gap</h2>
                  <p className="text-gray-300 mb-6">
                    iSpace is proud to announce our partnership with Taramandal, a leading space-tech startup, to develop cutting-edge space-related curriculum and hands-on learning activities for young learners. While many programs claim to provide hands-on learning experiences, there often exists a gap between what is taught and the actual skills needed in the real world. Through this partnership, we aim to bridge that gap and ensure that our students gain the practical knowledge and skills required to thrive in the space industry.
                  </p>
                  <p className="text-gray-300">
                    iSpace is the first in the market to introduce industry-led curricula specifically designed for children. We are grateful to Vineel Johnson, CEO of Taramandal, for joining us on this exciting journey to shape the next generation of space innovators.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="md:col-span-2">
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-blue/90 z-10"></div>
                <img 
                  src="/lovable-uploads/f02c7b62-7721-4c28-b4b5-4b389758b0de.png" 
                  alt="Partnership signing" 
                  className="w-full object-cover rounded-xl shadow-lg" 
                />
              </div>
            </div>
          </motion.div>
          
          {/* About section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">About Taramandal</h2>
            
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <p className="text-gray-300 mb-8">
                Taramandal is at the forefront of developing sustainable satellite technologies, tackling space debris, and promoting orbital sustainability. The company is known for its innovations in controlled satellite deorbiting and collision avoidance through AI-powered solutions. In 2024, Taramandal earned recognition as one of Forbes India's DGEMS Select-200 Entrepreneurs, solidifying its position as a leader in the space-tech industry.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-space-blue-dark/60 p-6 rounded-lg border border-space-purple/10">
                  <div className="bg-space-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Rocket className="text-space-purple-light" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Sustainable Satellites</h3>
                  <p className="text-gray-400 text-sm">Developing technologies that reduce space debris and promote orbital sustainability</p>
                </div>
                
                <div className="bg-space-blue-dark/60 p-6 rounded-lg border border-space-purple/10">
                  <div className="bg-space-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Shield className="text-space-purple-light" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">AI-Powered Solutions</h3>
                  <p className="text-gray-400 text-sm">Creating intelligent systems for satellite deorbiting and collision avoidance</p>
                </div>
                
                <div className="bg-space-blue-dark/60 p-6 rounded-lg border border-space-purple/10">
                  <div className="bg-space-purple/20 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    <Award className="text-space-purple-light" size={24} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Industry Recognition</h3>
                  <p className="text-gray-400 text-sm">Featured in Forbes India's DGEMS Select-200 Entrepreneurs (2024)</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-space-blue-light/30 to-space-purple/20 p-8 rounded-xl backdrop-blur-sm border border-space-purple/30">
              <h3 className="text-xl font-bold mb-4">Join Our Space Education Programs</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Experience the future of space education through our industry-led curricula developed in partnership with Taramandal.
              </p>
              <Button asChild className="space-button font-orbitron text-sm tracking-wider group">
                <Link to="/programs" className="flex items-center">
                  Explore Programs
                  <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Taramandal;
