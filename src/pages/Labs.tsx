
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Microscope, Cpu, User, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Labs = () => {
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
                  Astro-Tech Labs
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Experience cutting-edge space technology and hands-on learning through our state-of-the-art lab facilities and innovative programs.
              </p>
            </div>
            
            <div className="space-card p-8 mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-space-purple/20 p-3 rounded-full">
                  <Rocket className="w-8 h-8 text-space-purple" />
                </div>
                <h2 className="text-2xl font-orbitron">A Futuristic Space Lab Experience</h2>
              </div>
              
              <p className="text-gray-300 mb-8">
                Our labs are designed to provide students with immersive, hands-on experience in space technology and engineering, fostering innovation and practical skills development.
              </p>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <Rocket className="h-6 w-6" />,
                    title: "Space Station",
                    description: "DIY space projects including Mars Rover models, drones, and robotics engineering."
                  },
                  {
                    icon: <Cpu className="h-6 w-6" />,
                    title: "Astro Hackathons",
                    description: "Tackle real-world space challenges through collaborative problem-solving competitions."
                  },
                  {
                    icon: <Globe className="h-6 w-6" />,
                    title: "Space-on-Wheels",
                    description: "Mobile space learning units bringing space education to schools without permanent labs."
                  },
                  {
                    icon: <User className="h-6 w-6" />,
                    title: "Distinguished Speaker Series",
                    description: "Learn directly from experts at NASA, ISRO, and other leading space organizations."
                  },
                  {
                    icon: <Microscope className="h-6 w-6" />,
                    title: "Space Facility Visits",
                    description: "Educational trips to observatories and space centers in India and abroad."
                  },
                  {
                    icon: <Zap className="h-6 w-6" />,
                    title: "Creative Problem-Solving",
                    description: "Workshops led by USA & Finland experts focusing on space-related challenges."
                  }
                ].map((item, index) => (
                  <Card key={index} className="bg-space-blue-light/40 border-space-purple/20 overflow-hidden group hover:border-space-purple/50 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="mb-4 text-space-purple group-hover:text-space-neon transition-colors duration-300">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-card p-8">
                <h3 className="text-xl font-orbitron mb-4">Facility Development</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-space-purple"><Rocket className="h-4 w-4" /></div>
                    <span>State-of-the-Art Space Lab with specialized equipment for hands-on learning</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-space-purple"><Globe className="h-4 w-4" /></div>
                    <span>Space Facility Visits to observatories, aerospace centers, and research institutions</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-card p-8">
                <h3 className="text-xl font-orbitron mb-4">Enrichment Activities</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-space-purple"><Rocket className="h-4 w-4" /></div>
                    <span>Model United Nations (Space Edition): Simulating international space governance scenarios</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-space-purple"><User className="h-4 w-4" /></div>
                    <span>Distinguished Speaker Series: Regular visits from astronauts, NASA scientists, and space entrepreneurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-space-purple"><Globe className="h-4 w-4" /></div>
                    <span>International Collaborations: Virtual and physical exchanges with partner schools globally</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-space-purple"><Zap className="h-4 w-4" /></div>
                    <span>Space Industry Connections: Summer/Winter School opportunities and mentorship from sector professionals</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Labs;
