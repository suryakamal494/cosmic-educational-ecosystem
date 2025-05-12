
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Handshake, School, Rocket, BookOpen } from 'lucide-react';

const CenturionUniversity = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-32 pb-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="container mx-auto px-4 mb-16"
        >
          <div className="flex flex-col items-center text-center">
            <div className="w-full max-w-xs mx-auto mb-6">
              <img 
                src="/lovable-uploads/555d04bc-f6f4-4fb6-9b57-e6ff9cffa707.png" 
                alt="Centurion University Logo"
                className="w-full bg-white rounded-xl p-4" 
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-4">
              <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                Partnership with Centurion University
              </span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-space-purple to-space-neon/50 mx-auto mb-6"></div>
            <p className="text-lg text-gray-300 max-w-3xl">
              Advancing education, research, and innovation through our strategic collaboration with Centurion University of Technology and Management, Odisha.
            </p>
          </div>
        </motion.div>
        
        {/* Partnership Overview */}
        <section className="py-16 relative bg-space-blue-dark">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8">
                <Handshake className="text-space-purple h-8 w-8" />
                <h2 className="text-3xl font-bold">Partnership Overview</h2>
              </div>
              
              <div className="bg-space-blue-light/30 rounded-2xl p-8 border border-space-purple/20 backdrop-blur-sm">
                <p className="text-gray-300 leading-relaxed mb-6">
                  Centurion University of Technology and Management, Odisha (CUTM) and iSpace, powered by T3-Tech, entered into a strategic partnership through the formal signing of a Memorandum of Understanding (MoU). The event was held at T-Hub, Hyderabad, and marked a significant milestone in fostering collaborative initiatives in higher education, research, innovation, and entrepreneurship.
                </p>
                
                {/* MoU Signing Images */}
                <div className="grid md:grid-cols-2 gap-6 my-10">
                  <div className="relative rounded-xl overflow-hidden border border-space-purple/30">
                    <img 
                      src="/lovable-uploads/72c4897d-bffe-46ad-8989-edede1086ca3.png" 
                      alt="MoU Signing Ceremony" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-blue/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-sm text-space-purple-light">MoU Signing Ceremony</span>
                    </div>
                  </div>
                  
                  <div className="relative rounded-xl overflow-hidden border border-space-purple/30">
                    <img 
                      src="/lovable-uploads/5f885b3a-d76e-4945-a51b-8bbb8c12dc36.png" 
                      alt="Partnership Document Signing" 
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-blue/90 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4">
                      <span className="text-sm text-space-purple-light">Partnership Document Signing</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Partnership Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-8">
                <Rocket className="text-space-purple h-8 w-8" />
                <h2 className="text-3xl font-bold">Partnership Goals</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-space-blue-light/20 rounded-xl p-6 border border-space-purple/20 backdrop-blur-sm">
                  <School className="h-10 w-10 text-space-purple-light mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Educational Excellence</h3>
                  <p className="text-gray-300">
                    Joint development of innovative curricula and educational content in space science, technology, and STEM fields to enhance educational outcomes.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 rounded-xl p-6 border border-space-purple/20 backdrop-blur-sm">
                  <BookOpen className="h-10 w-10 text-space-purple-light mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Research Collaboration</h3>
                  <p className="text-gray-300">
                    Undertaking joint research initiatives and projects in areas of mutual interest, including space science, technology, and related disciplines.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 rounded-xl p-6 border border-space-purple/20 backdrop-blur-sm">
                  <Rocket className="h-10 w-10 text-space-purple-light mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Innovation Hub</h3>
                  <p className="text-gray-300">
                    Creating an innovation ecosystem that fosters creativity, critical thinking, and problem-solving skills among students and faculty.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 rounded-xl p-6 border border-space-purple/20 backdrop-blur-sm">
                  <Handshake className="h-10 w-10 text-space-purple-light mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Knowledge Exchange</h3>
                  <p className="text-gray-300">
                    Facilitating exchange programs for students and faculty to promote cross-institutional learning and diverse perspectives.
                  </p>
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

export default CenturionUniversity;
