
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import PartnershipsSection from '@/components/PartnershipsSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main>
        <HeroSection 
          title="Young Scientist Initiative"
          subtitle="Enrich Your School's Curriculum with Engaging Space & STEM Programs"
          ctaText="Explore Our Programs"
          ctaLink="/programs"
        />
        
        <ProgramsSection />
        
        <AboutSection />
        
        <PartnershipsSection />
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
