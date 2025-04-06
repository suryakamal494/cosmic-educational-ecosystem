
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import AboutSection from '@/components/AboutSection';
import PartnershipsSection from '@/components/PartnershipsSection';
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
        
        {/* Viksit Bharat Logo Section */}
        <div className="container mx-auto px-4 py-10 text-center">
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-400 mb-4 text-sm">Proud Supporter of</p>
            <img 
              src="/lovable-uploads/02fe0fb4-1656-43e8-b920-1bf886fc1ca5.png" 
              alt="Viksit Bharat Logo" 
              className="max-w-xs w-full mx-auto"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
