
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AboutSection from '@/components/AboutSection';
import PlanetAnimation from '@/components/PlanetAnimation';

const About = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-20 pb-20">
        <AboutSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
