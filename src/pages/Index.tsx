
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ProgramsSection from '@/components/ProgramsSection';
import VisionSection from '@/components/VisionSection';
import PartnersSection from '@/components/PartnersSection';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white overflow-hidden">
      <StarryBackground />
      <Navbar />
      
      <main>
        <HeroSection 
          title="Igniting Young Minds, Launching Future Space Leaders"
          subtitle="We empower schools to provide top-notch space education through our expert-driven curriculum, international collaborations, and hands-on learning experiences."
          ctaText="Explore Our Programs"
          ctaLink="/programs"
        />
        
        <ProgramsSection />
        
        <VisionSection />
        
        <PartnersSection />
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
