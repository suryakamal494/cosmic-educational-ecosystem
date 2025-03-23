import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Telescope, Star, SparkleIcon, Orbit, RocketIcon, SunIcon, Earth, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Astronomy = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cosmicItinerary = [
    {
      icon: <RocketIcon className="h-6 w-6 text-space-purple-light" />,
      title: "Chart the Moon's Journey",
      description: "Observe its shifting phases as it dances around Earth.",
      image: "/lovable-uploads/e3dd2969-e5c1-4ff2-8a9b-00759cbb64c9.png"
    },
    {
      icon: <SunIcon className="h-6 w-6 text-space-neon" />,
      title: "Decode the Sun's Mysteries",
      description: "Safely photograph our nearest star and uncover its role as our solar system's heartbeat.",
      image: "/lovable-uploads/1a410ea2-3bbd-4adb-a39e-fa2a9efc6066.png"
    },
    {
      icon: <Earth className="h-6 w-6 text-space-purple-light" />,
      title: "Journey to the Planets",
      description: "Explore their orbits, hues, and distinct traits across our cosmic neighborhood.",
      image: "/lovable-uploads/48581190-af29-431b-aaf3-6f1f3527eb20.png"
    },
    {
      icon: <Star className="h-6 w-6 text-space-neon" />,
      title: "Journey into Deep Space",
      description: "Snap breathtaking views of the Andromeda Galaxy, Orion Nebula, and Crab Nebula.",
      image: "/lovable-uploads/ec873c63-d213-4e3c-bdf6-7e578123c1e4.png"
    }
  ];

  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-16 relative">
        <section className="relative py-12 overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1, opacity: 0.3 }} 
            animate={{ scale: 1, opacity: 1 }} 
            transition={{ duration: 1.2 }}
            className="absolute inset-0 bg-[url('/lovable-uploads/f5e1fc64-ed01-4b5f-9f79-6ab919656fa7.png')] bg-cover bg-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-space-blue/80 via-space-blue/70 to-space-blue"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.3,
                  ease: "easeOut" 
                }}
                className="relative inline-block mb-6"
              >
                <SparkleIcon className="h-14 w-14 text-space-neon animate-pulse-glow mx-auto" />
                <div className="absolute inset-0 bg-space-neon/20 rounded-full blur-xl animate-pulse-glow"></div>
              </motion.div>
              
              <motion.h1 
                className="text-5xl md:text-6xl font-bold mb-6 font-orbitron leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent drop-shadow-lg">
                  Capture the Cosmos with Telescope
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-space-purple-light mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Your Galactic Adventure Awaits with iSpace
              </motion.p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 w-96 h-96 bg-space-purple/10 rounded-full blur-[100px] -z-10"
          />
          
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-8"
              >
                <div className="glass-card p-8 rounded-2xl border border-space-purple/30 shadow-xl backdrop-blur-xl bg-space-blue-light/20">
                  <h2 className="text-3xl font-orbitron font-bold mb-6 text-white">
                    Unlock the Secrets of the Universe
                  </h2>
                  
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                    For ages, humanity has gazed at the stars, sketching constellations, dreaming of far-off worlds, and pondering the universe's greatest enigmas. But what if you could leap beyond dreams and step into the cosmos yourself?
                  </p>
                  
                  <div className="flex items-center gap-3 p-4 bg-space-blue-light/30 rounded-lg border border-space-purple/20 mb-6">
                    <Telescope className="h-8 w-8 text-space-neon" />
                    <p className="text-lg text-white font-medium">
                      With iSpace, you're not just learning about space—you're living it!
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-300">
                    Our <span className="text-space-purple-light font-semibold">Astronomy Course</span> hands students the keys to elite telescopes worldwide, empowering them to observe, photograph, and unravel the secrets of the stars like true astronomers!
                  </p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-6"
              >
                <div className="relative p-1 rounded-2xl overflow-hidden bg-gradient-to-r from-space-purple/30 via-space-neon/20 to-space-purple/30">
                  <div className="absolute inset-0 bg-space-blue-light/10 backdrop-blur-md rounded-2xl"></div>
                  
                  <div className="p-6 relative">
                    <h3 className="text-2xl font-bold font-orbitron mb-6 text-center flex items-center justify-center gap-3">
                      <Star className="h-6 w-6 text-space-neon" />
                      What's on Your Cosmic Itinerary?
                      <Star className="h-6 w-6 text-space-neon" />
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {cosmicItinerary.map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          whileHover={{ scale: 1.03 }}
                          className="overflow-hidden"
                        >
                          <Card className="bg-space-blue-light/40 border-space-purple/20 overflow-hidden h-full flex flex-col group">
                            <div className="h-48 overflow-hidden relative">
                              <img 
                                src={item.image} 
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-space-blue-light/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                            <CardContent className="p-6 flex-grow">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="bg-space-blue p-2 rounded-full">
                                  {item.icon}
                                </div>
                                <h4 className="font-orbitron text-xl font-bold text-white">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-gray-300">
                                {item.description}
                              </p>
                            </CardContent>
                          </Card>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-space-neon/5 rounded-full blur-[100px] -z-10"
          />
          
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-orbitron font-bold mb-4">
                Your Hands-On Space Laboratory
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mb-6"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Take command of professional telescopes and capture the universe's most breathtaking phenomena.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass-card p-6 rounded-xl border border-space-purple/30 shadow-lg backdrop-blur-md bg-space-blue-light/20"
              >
                <div className="bg-gradient-to-br from-space-purple/20 to-space-blue-light/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Telescope className="h-8 w-8 text-space-purple-light" />
                </div>
                <h3 className="text-xl font-bold font-orbitron text-center mb-3">Remote Observatory Access</h3>
                <p className="text-gray-300 text-center">
                  Control professional-grade telescopes across the globe with real-time image processing.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="glass-card p-6 rounded-xl border border-space-purple/30 shadow-lg backdrop-blur-md bg-space-blue-light/20"
              >
                <div className="bg-gradient-to-br from-space-neon/20 to-space-blue-light/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Star className="h-8 w-8 text-space-neon" />
                </div>
                <h3 className="text-xl font-bold font-orbitron text-center mb-3">Expert Guidance</h3>
                <p className="text-gray-300 text-center">
                  Learn from experienced astronomers who'll guide your journey through the cosmos.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="glass-card p-6 rounded-xl border border-space-purple/30 shadow-lg backdrop-blur-md bg-space-blue-light/20"
              >
                <div className="bg-gradient-to-br from-space-purple-light/20 to-space-blue-light/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                  <Orbit className="h-8 w-8 text-space-purple-light" />
                </div>
                <h3 className="text-xl font-bold font-orbitron text-center mb-3">Celestial Photography</h3>
                <p className="text-gray-300 text-center">
                  Capture and process stunning astrophotography that you can keep and analyze.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        <section className="py-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-r from-space-blue via-space-blue-light/20 to-space-blue opacity-60 z-0"
          />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-br from-space-blue-light/30 to-space-blue-light/10 backdrop-blur-xl rounded-2xl p-10 border border-space-purple/30 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-space-neon/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 text-center">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto mb-6"
                  >
                    <div className="relative inline-block">
                      <Orbit className="h-12 w-12 text-space-neon" />
                      <div className="absolute inset-0 bg-space-neon/20 rounded-full blur-xl animate-pulse"></div>
                    </div>
                  </motion.div>
                  
                  <motion.h2 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-3xl md:text-4xl font-bold font-orbitron mb-4"
                  >
                    From Stargazer to Space Pioneer
                  </motion.h2>
                  
                  <motion.p 
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto"
                  >
                    Forget textbooks and static images—with iSpace, you're <span className="text-white font-medium">not just learning about space; you're living it</span>. Students transform into cosmic trail blazers, collecting authentic astronomical data and embarking on thrilling, hands-on voyages through the heavens!
                  </motion.p>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="w-full overflow-hidden px-4"
                  >
                    <Button 
                      asChild
                      className="space-button px-6 py-5 text-base sm:px-8 sm:py-6 sm:text-lg relative group overflow-hidden bg-gradient-to-r from-space-purple to-space-purple-dark hover:from-space-purple-dark hover:to-space-purple transition-all duration-300 w-auto mx-auto"
                    >
                      <Link to="/contact">
                        <span className="relative z-10 whitespace-normal sm:whitespace-nowrap">Begin Your Space Journey Today</span>
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-space-neon/0 via-white/20 to-space-neon/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                      </Link>
                    </Button>
                  </motion.div>
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

export default Astronomy;
