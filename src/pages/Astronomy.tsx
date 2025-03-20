
import React from 'react';
import { motion } from 'framer-motion';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Telescope, Star, Moon, Sun, Orbit, SparkleIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Astronomy = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-20">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/f5e1fc64-ed01-4b5f-9f79-6ab919656fa7.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-space-blue/80 via-space-blue/60 to-space-blue"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="mb-8 inline-block">
                <SparkleIcon className="h-12 w-12 text-space-neon animate-pulse-glow" />
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron leading-tight">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Launch into the Cosmos with iSpace
                </span>
              </h1>
              
              <h2 className="text-xl md:text-3xl text-space-purple-light mb-8">
                Your Galactic Adventure Awaits!
              </h2>
              
              <div className="bg-space-blue-light/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-space-purple/20 shadow-xl mb-10">
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  For ages, humanity has gazed at the stars, sketching constellations, dreaming of far-off worlds, and pondering the universe's greatest enigmas. But what if you could leap beyond dreams and step into the cosmos yourself?
                </p>
                
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  <strong className="text-white">What if the universe was yours to explore—live, in real time?</strong>
                </p>
                
                <div className="relative inline-block mb-6">
                  <p className="text-lg md:text-xl text-gray-300 leading-relaxed relative z-10">
                    With iSpace, that's no longer a fantasy—it's your reality! Our <strong className="text-white">Astronomy Course</strong> hands students the keys to elite telescopes worldwide, empowering them to observe, photograph, and unravel the secrets of the stars like true astronomers!
                  </p>
                  <div className="absolute -bottom-2 -left-2 -right-2 h-1 bg-gradient-to-r from-space-purple via-space-neon to-space-purple rounded-full"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Stargazing Portal Section */}
        <section className="py-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-96 h-96 bg-space-purple/10 rounded-full blur-[100px] -z-10"
          />
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-space-neon/5 rounded-full blur-[100px] -z-10"
          />
          
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <div className="inline-block">
                  <Telescope className="h-12 w-12 text-space-neon mb-4" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
                  Your Stargazing Portal Awaits!
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Dive into the universe with <strong className="text-white">real-time access</strong> to cutting-edge telescopes armed with high-frame-rate video cameras. Here's what you'll master:
                </p>
              </div>
              
              <div className="bg-space-blue-light/20 backdrop-blur-md rounded-xl p-8 border border-space-purple/30 shadow-lg">
                <div className="flex items-center gap-4 mb-0">
                  <div className="flex-shrink-0 bg-space-purple/20 p-3 rounded-full">
                    <Star className="w-7 h-7 text-space-neon" />
                  </div>
                  <p className="text-lg text-white font-medium">
                    Snap <span className="text-space-purple-light">jaw-dropping shots</span> of planets, nebulae, and galaxies—yours to keep and study!
                  </p>
                </div>
                
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-space-purple/30 to-transparent my-8 rounded-full"></div>
                
                <div className="text-center">
                  <Button className="space-button px-8 py-6 text-lg">
                    Begin Your Cosmic Journey
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Cosmic Itinerary Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
                What's on Your Cosmic Itinerary?
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mb-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-space-blue-light/20 backdrop-blur-md rounded-xl overflow-hidden border border-space-purple/30 shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-space-purple/20 p-2 rounded-full">
                    <Moon className="w-6 h-6 text-space-neon" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Chase the Moon's Mystique</h3>
                </div>
                
                <p className="text-gray-300 pl-12">
                  Watch its phases dance across the sky in <strong className="text-white">stunning detail</strong>.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-space-blue-light/20 backdrop-blur-md rounded-xl overflow-hidden border border-space-purple/30 shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-space-purple/20 p-2 rounded-full">
                    <Sun className="w-6 h-6 text-space-neon" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Decode the Sun's Fiery Riddles</h3>
                </div>
                
                <p className="text-gray-300 pl-12">
                  Peer safely at our star with <strong className="text-white">advanced solar filters</strong>.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-space-blue-light/20 backdrop-blur-md rounded-xl overflow-hidden border border-space-purple/30 shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-space-purple/20 p-2 rounded-full">
                    <Orbit className="w-6 h-6 text-space-neon" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Hunt Deep Space Treasures</h3>
                </div>
                
                <p className="text-gray-300 pl-12">
                  Capture epic shots of the <strong className="text-white">Andromeda Galaxy, Orion Nebula, and Crab Nebula</strong>.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-space-blue-light/20 backdrop-blur-md rounded-xl overflow-hidden border border-space-purple/30 shadow-lg p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-space-purple/20 p-2 rounded-full">
                    <Telescope className="w-6 h-6 text-space-neon" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Command the Cosmos Live</h3>
                </div>
                
                <p className="text-gray-300 pl-12">
                  Take the helm of professional telescopes remotely and <strong className="text-white">seize the universe's marvels</strong>!
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
                From Stargazer to Space Pioneer
              </h2>
              <h3 className="text-xl text-space-purple-light mb-8">
                Your Cosmic Quest Begins Here!
              </h3>
              
              <div className="bg-space-blue-light/30 backdrop-blur-md rounded-2xl p-8 border border-space-purple/20 shadow-xl mb-10 relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-space-neon/10 rounded-full blur-3xl"></div>
                
                <p className="text-lg text-gray-300 mb-8 relative z-10 leading-relaxed">
                  Forget textbooks and static images—with iSpace, you're <strong className="text-white">not just learning about space; you're living it</strong>. Students transform into cosmic trail blazers, collecting authentic astronomical data and embarking on thrilling, hands-on voyages through the heavens!
                </p>
                
                <Button className="space-button px-8 py-6 text-lg relative z-10">
                  Begin Your Space Journey Today
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Astronomy;
