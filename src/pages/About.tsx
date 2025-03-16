
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Rocket, Target, Sparkles, LineChart, Briefcase, GraduationCap, Globe, Users, Award, ChartBar } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block relative mb-4">
                <Star className="text-space-purple w-8 h-8 animate-pulse-glow" />
                <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h1 className="font-orbitron mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Stellar Origins
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Discover the mission and vision behind iSPACE, and how we're working to make space education accessible to all young minds.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-card p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-space-purple/20 p-2 rounded-full">
                    <Rocket className="w-5 h-5 text-space-purple" />
                  </div>
                  <h2 className="text-xl font-orbitron">Our Story</h2>
                </div>
                
                <p className="text-gray-300 text-sm flex-grow">
                  iSPACE was established with the mission of making space education accessible to young minds. Powered by a distinguished American space technology company, our team of aerospace engineers, educational specialists, and industry professionals brings unmatched expertise in space innovation and STEM education.
                </p>
                
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-16 bg-space-blue-light/30 rounded-lg flex items-center justify-center">
                    <Rocket className="text-space-purple w-6 h-6" />
                  </div>
                  <div className="h-16 bg-space-blue-light/30 rounded-lg flex items-center justify-center">
                    <Star className="text-space-neon w-6 h-6" />
                  </div>
                  <div className="h-16 bg-space-blue-light/30 rounded-lg flex items-center justify-center">
                    <Sparkles className="text-space-purple-light w-6 h-6" />
                  </div>
                </div>
              </div>
              
              <div className="space-card p-8 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-space-purple/20 p-2 rounded-full">
                    <Sparkles className="w-5 h-5 text-space-purple" />
                  </div>
                  <h2 className="text-xl font-orbitron">About iSPACE</h2>
                </div>
                
                <p className="text-gray-300 text-sm flex-grow">
                  iSPACE was established with the mission of making space education accessible to young minds. Powered by a distinguished American space technology company, our team of aerospace engineers, educational specialists, and industry professionals brings unmatched expertise in space innovation and STEM education.
                </p>
                
                <div className="grid grid-cols-3 gap-2 mt-6">
                  <div className="h-16 bg-space-blue-light/30 rounded-lg flex items-center justify-center">
                    <GraduationCap className="text-space-purple-light w-6 h-6" />
                  </div>
                  <div className="h-16 bg-space-blue-light/30 rounded-lg flex items-center justify-center">
                    <Globe className="text-space-neon w-6 h-6" />
                  </div>
                  <div className="h-16 bg-space-blue-light/30 rounded-lg flex items-center justify-center">
                    <Briefcase className="text-space-purple-light w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-card p-8 mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-space-purple/20 p-2 rounded-full">
                  <LineChart className="w-5 h-5 text-space-purple" />
                </div>
                <h2 className="text-xl font-orbitron">Executive Summary</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-6 flex flex-col items-center text-center hover:border-space-purple/30 transition-all duration-300 hover:bg-space-blue-light/40">
                  <div className="w-12 h-12 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                    <span className="text-xl font-bold text-space-purple">$3T</span>
                  </div>
                  <p className="text-sm text-gray-300">
                    The space industry is projected to be worth $3 trillion by 2040.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-6 flex flex-col items-center text-center hover:border-space-purple/30 transition-all duration-300 hover:bg-space-blue-light/40">
                  <div className="w-12 h-12 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                    <ChartBar className="w-6 h-6 text-space-purple" />
                  </div>
                  <p className="text-sm text-gray-300">
                    India aims to expand its space economy to $100 billion by 2040, increasing its global market share from 3.6% to 10% by 2030.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-6 flex flex-col items-center text-center hover:border-space-purple/30 transition-all duration-300 hover:bg-space-blue-light/40">
                  <div className="w-12 h-12 rounded-full bg-space-purple/10 flex items-center justify-center mb-4">
                    <Rocket className="w-6 h-6 text-space-purple" />
                  </div>
                  <p className="text-sm text-gray-300">
                    Our initiative establishes Space Centers of Excellence in schools, providing structured curriculums from basic space concepts to nano-satellite development and rocket engineering.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-card p-8 bg-gradient-to-br from-space-blue-light/40 to-space-blue">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center relative">
                  <Target className="text-space-purple w-8 h-8" />
                  <div className="absolute inset-0 rounded-full border-2 border-space-purple/30 animate-pulse"></div>
                </div>
              </div>
              
              <h2 className="text-2xl font-orbitron text-center mb-4">Mission & Vision</h2>
              <p className="text-gray-300 text-center max-w-2xl mx-auto">
                To inspire and equip young learners with skills in space science, fostering India's next generation of space innovators.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 text-center flex flex-col items-center hover:border-space-purple/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-space-purple/20 flex items-center justify-center mb-3">
                    <Sparkles className="w-6 h-6 text-space-purple" />
                  </div>
                  <p className="text-sm font-orbitron text-space-purple-light">Innovation</p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 text-center flex flex-col items-center hover:border-space-purple/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-space-purple/20 flex items-center justify-center mb-3">
                    <GraduationCap className="w-6 h-6 text-space-purple" />
                  </div>
                  <p className="text-sm font-orbitron text-space-purple-light">Education</p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 text-center flex flex-col items-center hover:border-space-purple/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-space-purple/20 flex items-center justify-center mb-3">
                    <Rocket className="w-6 h-6 text-space-purple" />
                  </div>
                  <p className="text-sm font-orbitron text-space-purple-light">Exploration</p>
                </div>
              </div>
              
              <div className="mt-8 flex justify-center">
                <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg p-6 max-w-2xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                      <Users className="w-5 h-5 text-space-purple" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold mb-1">Our Commitment</h3>
                      <p className="text-gray-300 text-sm">
                        We are dedicated to bridging the gap between theoretical knowledge and practical applications in space science education. Through our innovative programs, we aim to inspire curiosity, foster creativity, and develop the skills needed for the next generation of space pioneers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
