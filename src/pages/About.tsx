
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Star, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <Star className="text-space-purple w-8 h-8 animate-pulse-glow" />
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
                Stellar Origins
              </h1>
              
              <div className="space-card p-8 mb-12">
                <h2 className="text-2xl font-orbitron mb-4">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  iSPACE was established with the mission of making space education accessible to young minds. Powered by a distinguished American space technology company, our team of aerospace engineers, educational specialists, and industry professionals brings unmatched expertise in space innovation and STEM education.
                </p>
              </div>
              
              <div className="space-card p-8 mb-12">
                <h2 className="text-2xl font-orbitron mb-4">About iSPACE</h2>
                <p className="text-gray-300 mb-4">
                  iSPACE was established with the mission of making space education accessible to young minds. Powered by a distinguished American space technology company, our team of aerospace engineers, educational specialists, and industry professionals brings unmatched expertise in space innovation and STEM education.
                </p>
              </div>
              
              <div className="space-card p-8 mb-12">
                <h2 className="text-2xl font-orbitron mb-4">Executive Summary</h2>
                <ul className="text-gray-300 space-y-2 mb-4 list-disc list-inside">
                  <li>The space industry is projected to be worth $3 trillion by 2040.</li>
                  <li>India aims to expand its space economy to $100 billion by 2040, increasing its global market share from 3.6% to 10% by 2030.</li>
                  <li>Our initiative establishes Space Centers of Excellence in schools, providing structured curriculums from basic space concepts to nano-satellite development and rocket engineering.</li>
                </ul>
              </div>
              
              <div className="space-card p-8">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center">
                    <Rocket className="text-space-purple w-8 h-8" />
                  </div>
                </div>
                
                <h2 className="text-2xl font-orbitron text-center mb-4">Mission & Vision</h2>
                <p className="text-gray-300 text-center">
                  To inspire and equip young learners with skills in space science, fostering India's next generation of space innovators.
                </p>
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
