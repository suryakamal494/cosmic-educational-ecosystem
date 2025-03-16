
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Globe, Award } from 'lucide-react';
import ExchangeProgram from '@/components/ExchangeProgram';

const Expeditions = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-orbitron mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Cosmic Expeditions
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Broaden your horizons with our international space programs, agency visits, and global competitions that connect students with space professionals worldwide.
              </p>
            </div>
            
            <div className="grid gap-12">
              {/* Galactic Scholar Exchange */}
              <div className="space-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-space-purple/20 p-3 rounded-full">
                    <Globe className="w-8 h-8 text-space-purple" />
                  </div>
                  <h2 className="text-2xl font-orbitron">Galactic Scholar Exchange</h2>
                </div>
                
                <p className="text-gray-300 mb-8">
                  Our exchange programs offer students the unique opportunity to learn from leading universities and space institutions around the world, bringing global perspectives to their space education.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <ExchangeProgram 
                    title="University of the Virgin Islands"
                    description="Engage with cutting-edge astronomy research and observe the cosmos from one of the Caribbean's premier observatories."
                    imageUrl="/placeholder.svg"
                  />
                  
                  <ExchangeProgram 
                    title="Taltech University"
                    description="Learn space technology development alongside Estonia's pioneering space engineering program, known for nanosatellite innovation."
                    imageUrl="/placeholder.svg"
                  />
                </div>
              </div>
              
              {/* Interstellar Journeys */}
              <div className="space-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-space-purple/20 p-3 rounded-full">
                    <Rocket className="w-8 h-8 text-space-purple" />
                  </div>
                  <h2 className="text-2xl font-orbitron">Interstellar Journeys</h2>
                </div>
                
                <p className="text-gray-300 mb-8">
                  Experience firsthand how space agencies operate through our exclusive visits to global space centers, offering unprecedented access to facilities, technologies, and professionals.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="rounded-lg overflow-hidden bg-space-blue-light/50 border border-space-purple/20">
                    <div className="aspect-video bg-gradient-to-br from-space-purple/20 to-transparent"></div>
                    <div className="p-5">
                      <h3 className="mb-2">NASA Exploration Program</h3>
                      <p className="text-gray-300 text-sm">
                        Visit NASA facilities and work alongside engineers on real space mission simulations and technology demonstrations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="rounded-lg overflow-hidden bg-space-blue-light/50 border border-space-purple/20">
                    <div className="aspect-video bg-gradient-to-br from-space-purple/20 to-transparent"></div>
                    <div className="p-5">
                      <h3 className="mb-2">European Space Agency Workshop</h3>
                      <p className="text-gray-300 text-sm">
                        Participate in ESA's educational workshops focused on satellite operations and space data analysis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Celestial Conclaves */}
              <div className="space-card p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-space-purple/20 p-3 rounded-full">
                    <Award className="w-8 h-8 text-space-purple" />
                  </div>
                  <h2 className="text-2xl font-orbitron">Celestial Conclaves</h2>
                </div>
                
                <p className="text-gray-300 mb-8">
                  Represent your ideas on global stages through our conference and competition programs, where students can showcase their innovations and connect with the international space community.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "International Astronautical Congress (IAC)",
                    "Space Generation Advisory Council",
                    "NASA Space Apps Challenge",
                    "European Rover Challenge",
                    "International Space Settlement Design Competition",
                    "World Space Week Events"
                  ].map((item, index) => (
                    <div key={index} className="bg-space-blue-light/30 border border-space-purple/10 rounded-lg p-4">
                      <p className="text-sm text-center">{item}</p>
                    </div>
                  ))}
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

export default Expeditions;
