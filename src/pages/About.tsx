
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Star, Rocket, Globe, Sparkles, Orbit, Award } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-32 pb-20 relative">
        {/* Decorative orbits */}
        <div className="absolute top-0 right-0 w-96 h-96 border border-space-purple/10 rounded-full opacity-20 animate-planet-rotate"></div>
        <div className="absolute bottom-1/4 -left-40 w-80 h-80 border border-space-neon/10 rounded-full opacity-20 animate-[planet-rotate_80s_linear_infinite]"></div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-space-purple/5 blur-[100px] rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-space-neon/5 blur-[80px] rounded-full"></div>
        
        <VisionSection />
        <JourneySection />
        <IndustrySection />
        {/* AboutSection removed as requested */}
      </main>
      
      <Footer />
    </div>
  );
};

const VisionSection = () => {
  return (
    <section className="mb-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Vision Statement */}
          <div className="relative z-10">
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex justify-center items-center mb-8"
            >
              <div className="relative">
                <Star className="w-10 h-10 text-space-purple" />
                <div className="absolute inset-0 bg-space-purple/20 rounded-full blur-md animate-pulse-glow"></div>
              </div>
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-orbitron text-4xl md:text-5xl font-bold mb-8 tracking-wide"
            >
              Vision Statement
            </motion.h1>
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-space-purple/30 to-space-neon/20 rounded-xl blur-md"></div>
              <div className="relative bg-gradient-to-br from-space-blue-light/50 to-space-blue/95 backdrop-blur-md p-10 md:p-12 rounded-xl border border-space-purple/30 shadow-xl">
                <p className="text-xl md:text-3xl text-center font-orbitron italic text-space-purple-light leading-relaxed">
                  At iSpace, we envision a future where every student is a space enthusiast, innovator, and explorer.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const JourneySection = () => {
  // Animation variants for staggered animations
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section className="mb-12 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Rocket className="w-8 h-8 text-space-purple" />
              <h2 className="text-3xl md:text-4xl font-orbitron">The iSpace Journey</h2>
            </div>
            
            <div className="h-1 w-24 bg-gradient-to-r from-space-purple to-space-neon/50 mb-2"></div>
            <h3 className="text-xl md:text-2xl font-orbitron text-space-purple-light mb-8">Making Space Accessible to All</h3>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 bg-card-gradient backdrop-blur-md p-8 md:p-10 rounded-2xl border border-space-purple/30 shadow-xl"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 -mt-6 -mr-6">
              <div className="relative">
                <Orbit className="w-12 h-12 text-space-purple/20" />
                <div className="absolute inset-0 bg-space-purple/10 rounded-full blur-lg"></div>
              </div>
            </div>
            
            <motion.p variants={item} className="text-gray-300 text-lg leading-relaxed mb-6">
              What began as a vision to move <span className="text-space-purple-light font-medium">space exploration beyond textbooks</span> has grown into <span className="text-space-purple-light font-medium">iSpace</span>—a mission to transform students into hands-on space innovators. We believe <span className="text-space-purple-light font-medium">space education can reshape how young minds learn</span>, so we've crafted programs blending <span className="text-space-purple-light font-medium">practical experiments, cutting-edge simulations, and real-world challenges</span>.
            </motion.p>
            
            <motion.p variants={item} className="text-gray-300 text-lg leading-relaxed">
              Rooted in the idea that <span className="text-space-purple-light font-medium">every student deserves a chance to reach for the stars</span>, we partner with <span className="text-space-purple-light font-medium">top-tier global institutions, space agencies, and tech pioneers</span> to bring the wonders of the cosmos directly into classrooms.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const IndustrySection = () => {
  const stats = [
    { value: "$3T", label: "Global space sector by 2040" },
    { value: "$100B", label: "India's targeted space economy" },
    { value: "44%", label: "Annual growth in space tech startups" },
  ];
  
  return (
    <section className="mb-12 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-8"
          >
            <div className="flex items-center gap-4 mb-6">
              <Globe className="w-8 h-8 text-space-purple" />
              <h2 className="text-3xl md:text-4xl font-orbitron">The Space Industry</h2>
            </div>
            
            <div className="h-1 w-24 bg-gradient-to-r from-space-neon/50 to-space-purple mb-8"></div>
          </motion.div>
          
          {/* Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-space-blue-light/30 backdrop-blur-sm border border-space-purple/20 rounded-xl p-6 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-orbitron text-white mb-2">{stat.value}</h3>
                <p className="text-space-purple-light">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-space-neon/20 to-space-purple/30 rounded-xl blur-md"></div>
            <div className="relative z-10 bg-card-gradient backdrop-blur-md p-8 md:p-10 rounded-2xl border border-space-purple/30 shadow-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                The <span className="text-space-purple-light font-medium">global space sector is poised to hit $3 trillion by 2040</span>, with India aiming to grow its share to <span className="text-space-purple-light font-medium">$100 billion</span>. As space tech fuels advancements in <span className="text-space-purple-light font-medium">telecommunications, defense, AI, and sustainability</span>, the need for expertise in <span className="text-space-purple-light font-medium">aerospace, robotics, and data science</span> is surging.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Yet, traditional education often overlooks this frontier. <span className="text-space-purple-light font-medium">iSpace fills this void</span> with immersive, structured programs, empowering students to not just study space but <span className="text-space-purple-light font-medium">actively shape its future</span>.
              </p>
              
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                  className="relative"
                >
                  <Sparkles className="w-12 h-12 text-space-neon/20" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
