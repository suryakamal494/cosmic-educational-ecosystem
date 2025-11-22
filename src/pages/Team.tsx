import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Award, Star, Users, Rocket, Globe, Brain } from 'lucide-react';
import TeamMember from '@/components/TeamMember';
import { motion } from 'framer-motion';

const Team = () => {
  // Updated images - Using the newly uploaded images
  const suryaImage = "/lovable-uploads/9064b016-2d31-4347-b027-279138549637.png";
  
  // Keep the USA flag for specific profiles
  const usaFlagBadge = "/lovable-uploads/47170ccf-00a6-46d5-9674-048f42cfb0ba.png";
  
  // Adding Elisabeth Morney profile with updated image
  const elisabethImage = "/lovable-uploads/f63838b0-edd5-4e12-85e0-76ddee8bf74e.png";
  const finlandFlagBadge = "/lovable-uploads/96861cf5-afd5-41c1-ae41-16b9ba2d0d71.png";
  
  // Adding Dr. Iyyanki V. Murali Krishna's profile image
  const iyyankiImage = "/lovable-uploads/c8760795-8b80-4ac1-884d-542ea2e1e5d5.png";
  
  // Keep original images for others
  const jamesImage = "/lovable-uploads/d21584d8-0b9c-416d-88f9-c73f29c479d7.png";
  const josephImage = "/lovable-uploads/c77a7e27-a377-44c4-b774-4b3722ade982.png";
  const blairImage = "/lovable-uploads/9f6d891a-07cc-406a-964a-1e398d0a5290.png";
  const kenImage = "/lovable-uploads/397eedea-3e25-4583-8bd2-c29f136d010e.png";

  // Updated Orly profile with new image and Israeli flag
  const orlyImage = "/lovable-uploads/6b133a0e-8566-4385-a61a-57cc96c1bc70.png";
  const israelFlagBadge = "/lovable-uploads/9d132cb0-0cce-4b64-9a4f-c00898ad63c7.png";

  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-32 pb-20 relative">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-1/2 h-80 bg-space-purple/5 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-40 left-0 w-1/2 h-80 bg-space-neon/5 blur-[150px] rounded-full pointer-events-none"></div>
        
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-4">
                <div className="relative">
                  <Star className="h-12 w-12 text-space-purple animate-pulse" />
                  <div className="absolute inset-0 bg-space-purple/30 blur-xl rounded-full animate-pulse-slow"></div>
                </div>
              </div>
              
              <h1 className="font-orbitron text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Command Crew
                </span>
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-space-purple to-space-neon/50 mx-auto mb-8"></div>
              <p className="text-gray-300 text-xl max-w-3xl mx-auto">
                Meet the visionaries, educators, and space enthusiasts dedicated to inspiring the next generation of space pioneers.
              </p>
            </motion.div>
            
            {/* Leadership Section */}
            <motion.section 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-20"
            >
              <div className="flex items-center justify-center gap-4 mb-10">
                <div className="h-[1px] w-16 bg-space-purple/50"></div>
                <h2 className="text-3xl font-orbitron uppercase tracking-wider">Leadership</h2>
                <div className="h-[1px] w-16 bg-space-purple/50"></div>
              </div>
              
              <div className="grid gap-10">
                {/* Reordered profiles: 1. Suryakamal, 2. Dr. Yuvaraju, 3. Dr. Iyyanki */}
                <div className="grid md:grid-cols-1 gap-10">
                  <TeamMember 
                    name="Suryakamal B."
                    title="Founder & CEO"
                    bio="Suryakamal, Founder & CEO of iSpace, is an education pioneer passionate about redefining learning through hands-on, immersive experiences. Driven by the need to equip students for a future in STEM, technology, and space exploration, he launched iSpace to transcend conventional education and cultivate creativity, critical thinking, and problem-solving abilities. He understands the pivotal role space education plays in inspiring young minds, using practical exposure to astronomy, engineering, and space sciences to build curiosity, adaptability, and resilience—essential traits for thriving in a dynamic world. At iSpace, Suryakamal is dedicated to equipping students with the skills to innovate, discover, and spearhead the next wave of space trailblazers."
                    profileLink="https://www.linkedin.com/in/suryakamal-bourisetty-8937a6112/"
                    imageUrl={suryaImage}
                  />
                </div>
                
                <div className="grid md:grid-cols-1 gap-10 mt-10">
                  <TeamMember 
                    name="Dr. Iyyanki V. Murali Krishna"
                    title="President"
                    bio="Dr. Iyyanki V. Murali Krishna is a globally renowned expert in space technology, environmental management, and data analytics. With over four decades of experience spanning academia, government, and international collaboration, he has pioneered research and innovation in fields such as remote sensing, climate change, AI for sustainable development, and spatial epidemiology. An alumnus of IIT Madras and IISc Bangalore, he has held esteemed roles including Director of R&D at JNTU-Hyd, Senior Scientist at ISRO, and Senior Advisor at UC Berkeley's Haas Institute. He has been instrumental in shaping national policies and projects on climate resilience, disaster management, and smart village development, while mentoring over 40 PhD scholars. As President of iSpace, he brings visionary leadership and a commitment to advancing space education, innovation, and accessibility across the globe."
                    profileLink="https://www.linkedin.com/in/iyyanki-v-muralikrishna/"
                    imageUrl={iyyankiImage}
                    extraInfo="M - Tech (IIT-Madras), Ph.D (IISc-Bangalore), FIE, FIS, FAPASc, FICDM, IEEE Life Member"
                  />
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Team;
