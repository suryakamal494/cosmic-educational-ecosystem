
import React from 'react';
import { motion } from 'framer-motion';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Telescope, Star, SparkleIcon, Orbit } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Astronomy = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section - More compact */}
        <section className="relative py-12">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/f5e1fc64-ed01-4b5f-9f79-6ab919656fa7.png')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-space-blue/80 via-space-blue/60 to-space-blue"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <SparkleIcon className="h-12 w-12 text-space-neon animate-pulse-glow mx-auto mb-6" />
              
              <h1 className="text-4xl md:text-5xl font-bold mb-4 font-orbitron leading-tight">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Launch into the Cosmos with iSpace
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-space-purple-light mb-6">
                Your Galactic Adventure Awaits!
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Main Content - Consolidated and more visually appealing */}
        <section className="py-10 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-96 h-96 bg-space-purple/10 rounded-full blur-[100px] -z-10"
          />
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Text Column */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-7 space-y-8"
              >
                <div className="bg-space-blue-light/20 backdrop-blur-md rounded-xl p-6 border border-space-purple/30 shadow-lg">
                  <p className="text-lg text-gray-300 mb-4">
                    For ages, humanity has gazed at the stars, sketching constellations, dreaming of far-off worlds, and pondering the universe's greatest enigmas. But what if you could leap beyond dreams and step into the cosmos yourself?
                  </p>
                  
                  <p className="text-lg text-white font-semibold mb-4">
                    What if the universe was yours to explore—live, in real time?
                  </p>
                  
                  <p className="text-lg text-gray-300">
                    With iSpace, that's no longer a fantasy—it's your reality! Our <strong className="text-white">Astronomy Course</strong> hands students the keys to elite telescopes worldwide, empowering them to observe, photograph, and unravel the secrets of the stars like true astronomers!
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 backdrop-blur-md rounded-xl p-6 border border-space-purple/30 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <Telescope className="h-8 w-8 text-space-neon" />
                    <h2 className="text-2xl font-bold">Your Stargazing Portal Awaits!</h2>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Dive into the universe with <strong className="text-white">real-time access</strong> to cutting-edge telescopes armed with high-frame-rate video cameras. Here's what you'll master:
                  </p>
                  
                  <div className="pl-4 border-l-2 border-space-purple/30 ml-2">
                    <p className="text-white">
                      ✔️ Snap <span className="text-space-purple-light font-semibold">jaw-dropping shots</span> of planets, nebulae, and galaxies—yours to keep and study!
                    </p>
                  </div>
                </div>
              </motion.div>
              
              {/* Cosmic Itinerary Column */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-5"
              >
                <div className="bg-space-blue-light/30 backdrop-blur-xl rounded-xl p-6 border border-space-purple/30 shadow-xl relative overflow-hidden">
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-space-purple/20 rounded-full blur-3xl"></div>
                  
                  <h3 className="text-xl font-bold mb-4 relative z-10 flex items-center gap-2">
                    <Star className="h-5 w-5 text-space-neon" />
                    What's on Your Cosmic Itinerary?
                  </h3>
                  
                  <div className="space-y-6 relative z-10">
                    <div className="bg-space-blue-light/20 backdrop-blur-md rounded-lg p-4 border border-space-purple/20">
                      <h4 className="font-bold text-white mb-1">Chase the Moon's Mystique</h4>
                      <p className="text-gray-300 text-sm">
                        Watch its phases dance across the sky in <strong className="text-white">stunning detail</strong>.
                      </p>
                    </div>
                    
                    <div className="bg-space-blue-light/20 backdrop-blur-md rounded-lg p-4 border border-space-purple/20">
                      <h4 className="font-bold text-white mb-1">Decode the Sun's Fiery Riddles</h4>
                      <p className="text-gray-300 text-sm">
                        Peer safely at our star with <strong className="text-white">advanced solar filters</strong>.
                      </p>
                    </div>
                    
                    <div className="bg-space-blue-light/20 backdrop-blur-md rounded-lg p-4 border border-space-purple/20">
                      <h4 className="font-bold text-white mb-1">Hunt Deep Space Treasures</h4>
                      <p className="text-gray-300 text-sm">
                        Capture epic shots of the <strong className="text-white">Andromeda Galaxy, Orion Nebula, and Crab Nebula</strong>.
                      </p>
                    </div>
                    
                    <div className="bg-space-blue-light/20 backdrop-blur-md rounded-lg p-4 border border-space-purple/20">
                      <h4 className="font-bold text-white mb-1">Command the Cosmos Live</h4>
                      <p className="text-gray-300 text-sm">
                        Take the helm of professional telescopes remotely and <strong className="text-white">seize the universe's marvels</strong>!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-10 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="bg-space-blue-light/30 backdrop-blur-md rounded-2xl p-8 border border-space-purple/20 shadow-xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-space-neon/10 rounded-full blur-3xl"></div>
                
                <Orbit className="h-10 w-10 text-space-neon mx-auto mb-4" />
                
                <h2 className="text-2xl md:text-3xl font-bold mb-3 font-orbitron relative z-10">
                  From Stargazer to Space Pioneer
                </h2>
                
                <p className="text-lg text-gray-300 mb-6 relative z-10">
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
