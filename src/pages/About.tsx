
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PlanetAnimation from '@/components/PlanetAnimation';
import { motion } from 'framer-motion';
import { Rocket, Star, UserIcon } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <AboutContent />
      </main>
      
      <Footer />
    </div>
  );
};

const AboutContent = () => {
  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        {/* Vision Statement */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="relative">
              <Star className="w-8 h-8 text-space-purple" />
              <div className="absolute inset-0 bg-space-purple/20 rounded-full blur-md"></div>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-orbitron font-bold mb-6">Vision Statement</h1>
          
          <div className="space-card p-8 mb-10">
            <p className="text-xl md:text-2xl text-center italic font-light text-space-purple-light">
              At iSpace, we envision a future where every student is a space enthusiast, innovator, and explorer.
            </p>
          </div>
        </div>
        
        {/* The iSpace Journey */}
        <div className="mb-20">
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <Rocket className="w-7 h-7 text-space-purple" />
              <div className="absolute inset-0 bg-space-purple/20 rounded-full blur-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-orbitron">The iSpace Journey</h2>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-space-purple/30 to-space-neon/30 rounded-xl blur"></div>
            <div className="relative space-card backdrop-blur-sm">
              <h3 className="text-xl md:text-2xl font-orbitron mb-4 text-white/90">Making Space Accessible to All</h3>
              
              <p className="text-gray-300 leading-relaxed mb-6">
                What began as a vision to move <span className="text-space-purple-light font-medium">space exploration beyond textbooks</span> has grown into <span className="text-space-purple-light font-medium">iSpace</span>—a mission to transform students into hands-on space innovators. We believe <span className="text-space-purple-light font-medium">space education can reshape how young minds learn</span>, so we've crafted programs blending <span className="text-space-purple-light font-medium">practical experiments, cutting-edge simulations, and real-world challenges</span>.
              </p>
              
              <p className="text-gray-300 leading-relaxed">
                Rooted in the idea that <span className="text-space-purple-light font-medium">every student deserves a chance to reach for the stars</span>, we partner with <span className="text-space-purple-light font-medium">top-tier global institutions, space agencies, and tech pioneers</span> to bring the wonders of the cosmos directly into classrooms.
              </p>
            </div>
          </div>
        </div>
        
        {/* The Space Industry */}
        <div className="mb-16">
          <div className="flex items-center mb-6">
            <div className="relative mr-4">
              <UserIcon className="w-7 h-7 text-space-purple" />
              <div className="absolute inset-0 bg-space-purple/20 rounded-full blur-md"></div>
            </div>
            <h2 className="text-2xl md:text-3xl font-orbitron">The Space Industry</h2>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-space-neon/30 to-space-purple/30 rounded-xl blur"></div>
            <div className="relative space-card backdrop-blur-sm">
              <p className="text-gray-300 leading-relaxed">
                The <span className="text-space-purple-light font-medium">global space sector is poised to hit $3 trillion by 2040</span>, with India aiming to grow its share to <span className="text-space-purple-light font-medium">$100 billion</span>. As space tech fuels advancements in <span className="text-space-purple-light font-medium">telecommunications, defense, AI, and sustainability</span>, the need for expertise in <span className="text-space-purple-light font-medium">aerospace, robotics, and data science</span> is surging. 
              </p>
              
              <p className="text-gray-300 leading-relaxed mt-4">
                Yet, traditional education often overlooks this frontier. <span className="text-space-purple-light font-medium">iSpace fills this void</span> with immersive, structured programs, empowering students to not just study space but <span className="text-space-purple-light font-medium">actively shape its future</span>.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
