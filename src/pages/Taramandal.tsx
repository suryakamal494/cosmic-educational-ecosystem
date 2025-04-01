
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { Telescope, Globe, Award } from 'lucide-react';

const Taramandal = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="w-48 h-48 bg-white flex items-center justify-center rounded-lg p-4 mb-8">
              <img 
                src="/lovable-uploads/99bfe2a0-c134-499b-aa87-79f58581c00f.png" 
                alt="Taramandal Logo" 
                className="w-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Taramandal Partnership</h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Bringing cutting-edge space technology and satellite education from orbit to earth, enhancing our curriculum with practical space applications.
            </p>
          </div>
          
          {/* About Taramandal */}
          <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20 mb-16">
            <h2 className="text-2xl font-bold mb-4">From Orbit To Earth</h2>
            <p className="text-gray-300 mb-6">
              Taramandal is at the forefront of satellite technology and space applications, bringing real-world space mission experience and expertise to our educational programs. Through this strategic partnership, students gain access to practical knowledge about satellite operations, data analysis, and the applications of space technology in solving Earth's challenges.
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl h-64 bg-space-blue-dark rounded-xl flex items-center justify-center">
                <p className="text-xl font-orbitron text-space-purple-light">Satellite Technology Education</p>
              </div>
            </div>
          </div>
          
          {/* Partnership Benefits */}
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12">
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Telescope className="text-space-purple-light" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Satellite Technology</h3>
              <p className="text-gray-300">
                Students learn about satellite design, orbital mechanics, and remote sensing technologies through hands-on projects and simulations developed with Taramandal.
              </p>
            </div>
            
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Globe className="text-space-purple-light" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Earth Observation</h3>
              <p className="text-gray-300">
                Access to real satellite data and earth observation techniques allows students to work on environmental monitoring, disaster management, and urban planning projects.
              </p>
            </div>
            
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Award className="text-space-purple-light" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-4">Industry Connection</h3>
              <p className="text-gray-300">
                Our partnership provides students with direct connections to industry professionals, potential internship opportunities, and insights into career paths in the space sector.
              </p>
            </div>
          </div>
          
          {/* Special Programs */}
          <div className="text-center my-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Special Programs</h2>
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-3">Satellite Data Workshop</h3>
                  <p className="text-gray-300 mb-4">
                    Learn to access, process, and analyze satellite imagery and data for environmental monitoring and other applications.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-3">CubeSat Development</h3>
                  <p className="text-gray-300 mb-4">
                    Participate in the design and development of educational CubeSats with guidance from Taramandal experts.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href="/programs" 
                  className="inline-block px-8 py-3 bg-space-purple hover:bg-space-purple-light transition-colors rounded-lg font-semibold"
                >
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Taramandal;
