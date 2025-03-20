
import React from 'react';
import { motion } from 'framer-motion';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Telescope, Star, Sun, Orbit } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Astronomy = () => {
  const cosmicItineraryItems = [
    {
      title: "Chase the Moon's Mystique",
      description: "Watch its phases dance across the sky in stunning detail.",
      icon: <Star className="w-6 h-6 text-space-neon" />,
      image: "/lovable-uploads/d21584d8-0b9c-416d-88f9-c73f29c479d7.png"
    },
    {
      title: "Decode the Sun's Fiery Riddles",
      description: "Peer safely at our star with advanced solar filters.",
      icon: <Sun className="w-6 h-6 text-space-neon" />,
      image: "/lovable-uploads/b4e68210-cea7-4557-95c0-4eccf97fb232.png"
    },
    {
      title: "Hunt Deep Space Treasures",
      description: "Capture epic shots of the Andromeda Galaxy, Orion Nebula, and Crab Nebula.",
      icon: <Orbit className="w-6 h-6 text-space-neon" />,
      image: "/lovable-uploads/9f6d891a-07cc-406a-964a-1e398d0a5290.png"
    },
    {
      title: "Command the Cosmos Live",
      description: "Take the helm of professional telescopes remotely and seize the universe's marvels!",
      icon: <Telescope className="w-6 h-6 text-space-neon" />,
      image: "/lovable-uploads/fe413829-aa20-4113-b6a8-43ce1275bad1.png"
    }
  ];

  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-20 pb-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24">
          <div className="absolute inset-0 bg-[url('/lovable-uploads/75d2629a-b1b1-474d-bdc5-d882d9980006.png')] bg-cover bg-center opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-space-blue/80 via-space-blue/60 to-space-blue"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-orbitron">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Launch into the Cosmos with iSpace
                </span>
              </h1>
              <h2 className="text-xl md:text-3xl text-space-purple-light mb-10">
                Your Galactic Adventure Awaits!
              </h2>
              
              <div className="bg-space-blue-light/30 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-space-purple/20 shadow-xl">
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  For ages, humanity has gazed at the stars, sketching constellations, dreaming of far-off worlds, and pondering the universe's greatest enigmas. But what if you could leap beyond dreams and step into the cosmos yourself?
                </p>
                <p className="text-lg md:text-xl text-gray-300 mb-6 leading-relaxed">
                  What if the universe was yours to explore—live, in real time?
                </p>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                  With iSpace, that's no longer a fantasy—it's your reality! Our Astronomy Course hands students the keys to elite telescopes worldwide, empowering them to observe, photograph, and unravel the secrets of the stars like true astronomers!
                </p>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Stargazing Portal Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
                  Your Stargazing Portal Awaits!
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-space-purple to-space-neon mx-auto mb-6"></div>
                <p className="text-xl text-gray-300">
                  Dive into the universe with real-time access to cutting-edge telescopes armed with high-frame-rate video cameras. Here's what you'll master:
                </p>
              </div>
              
              <div className="bg-space-blue-light/20 backdrop-blur-md rounded-xl p-6 border border-space-purple/30 shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-shrink-0 bg-space-purple/20 p-2 rounded-full">
                    <Star className="w-6 h-6 text-space-neon" />
                  </div>
                  <p className="text-lg text-white">
                    Snap jaw-dropping shots of planets, nebulae, and galaxies—yours to keep and study!
                  </p>
                </div>
                
                <div className="aspect-video overflow-hidden rounded-lg border border-space-purple/30 mb-6">
                  <img 
                    src="/lovable-uploads/c77a7e27-a377-44c4-b774-4b3722ade982.png" 
                    alt="Telescope" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="text-center">
                  <Button className="space-button px-8">
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {cosmicItineraryItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-space-blue-light/20 backdrop-blur-md rounded-xl overflow-hidden border border-space-purple/30 shadow-lg group hover:border-space-purple/60 transition-all duration-300"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-space-purple/20 p-2 rounded-full">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                    </div>
                    
                    <p className="text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Background decorative elements */}
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-space-purple/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-space-neon/5 rounded-full blur-3xl" />
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                  Forget textbooks and static images—with iSpace, you're not just learning about space; you're living it. Students transform into cosmic trail blazers, collecting authentic astronomical data and embarking on thrilling, hands-on voyages through the heavens!
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
