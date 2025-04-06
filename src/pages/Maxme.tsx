
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, MessageSquare, Users, Lightbulb, GraduationCap, ChevronRight } from 'lucide-react';

const Maxme = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section - More compact and visually striking */}
        <section className="relative mb-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-32 h-32 md:w-40 md:h-40 bg-[#5935E8] flex items-center justify-center rounded-lg p-3 mb-4 shadow-lg shadow-purple-500/30">
                <img 
                  src="/lovable-uploads/5571d328-32e6-47df-b3b6-0e752cb3d10f.png" 
                  alt="Maxme Logo" 
                  className="w-full"
                />
              </div>
              <h1 className="text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-300 to-white">
                MAX AI
              </h1>
              <div className="h-0.5 w-16 bg-space-purple my-3" />
              <p className="text-lg md:text-xl font-light text-gray-300">
                Mindful Advancement & eXploration Australia - India
              </p>
              <div className="mt-4 p-4 bg-space-blue-light/40 rounded-lg border border-space-purple/30 max-w-2xl">
                <p className="text-gray-300 text-md italic">
                  "We've joined forces with Maxme to equip learners with the critical human-centric skills needed to excel in an AI-driven world."
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Partnership Overview - Using tabs for more concise presentation */}
        <section className="relative py-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-space-blue to-transparent opacity-70"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Partnership <span className="text-space-purple">Overview</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex flex-col space-y-4">
                <Card className="bg-space-blue-light/30 border-space-purple/20 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <p className="text-gray-300 leading-relaxed">
                      We believe that preparing young minds for a rapidly changing future goes beyond just technical proficiency. By joining hands with Maxme, our goal is to ensure students gain the essential interpersonal, leadership, and communication skills that will set them apart.
                    </p>
                  </CardContent>
                </Card>
                
                <Card className="bg-space-blue-light/30 border-space-purple/20 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <p className="text-gray-300 leading-relaxed">
                      This collaboration integrates seamlessly into educational institutions, offering holistic learning experiences that foster resilience, critical thinking, and collaborative problem-solving.
                    </p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-space-purple to-space-neon opacity-30 rounded-lg blur group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/5a4853c2-a6b7-441c-9e63-a86776e23509.png" 
                      alt="Partnership signing ceremony" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-space-purple to-space-neon opacity-30 rounded-lg blur group-hover:opacity-50 transition duration-300"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    <img 
                      src="/lovable-uploads/e52d7e4d-ca6d-4296-a1d3-3192d5f91e61.png" 
                      alt="Partnership signing moment" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Maxme - Improved visual hierarchy */}
        <section className="py-10 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              About <span className="text-space-purple">Maxme</span>
            </h2>
            
            <div className="max-w-3xl mx-auto bg-space-blue-light/20 p-6 rounded-xl border border-space-purple/20 backdrop-blur-sm mb-12">
              <p className="text-gray-300 text-center leading-relaxed">
                Maxme is an Australian EdTech leader specializing in human skill development. Their programs build Communication, Leadership, Teamwork, and Self-Awareness—critical strengths that empower learners to tackle future challenges confidently.
              </p>
              
              <div className="flex items-center justify-center mt-4">
                <div className="h-0.5 w-16 bg-space-purple/40" />
              </div>
              
              <p className="text-gray-300 text-center leading-relaxed mt-4">
                With established relationships across industry and academia, including collaborations with Deloitte, PwC, and Monash University, Maxme's track record makes them the ideal partner in this transformative journey.
              </p>
            </div>
            
            {/* Core Skills - More visually engaging layout */}
            <h3 className="text-xl md:text-2xl font-bold text-center mb-6">
              <span className="text-space-purple-light">Core</span> Skills Development
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <Card className="bg-gradient-to-br from-space-blue-light/40 to-space-blue-light/10 border-space-purple/20 backdrop-blur-sm overflow-hidden group transition-all hover:translate-y-[-5px]">
                <CardContent className="p-5">
                  <div className="bg-space-purple/20 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-space-purple/30 transition-colors">
                    <MessageSquare className="text-space-purple-light" size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Communication</h3>
                  <p className="text-gray-300 text-sm">Express ideas clearly and listen effectively to collaborate</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-space-blue-light/40 to-space-blue-light/10 border-space-purple/20 backdrop-blur-sm overflow-hidden group transition-all hover:translate-y-[-5px]">
                <CardContent className="p-5">
                  <div className="bg-space-purple/20 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-space-purple/30 transition-colors">
                    <Users className="text-space-purple-light" size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Leadership</h3>
                  <p className="text-gray-300 text-sm">Guide teams and inspire others to achieve shared goals</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-space-blue-light/40 to-space-blue-light/10 border-space-purple/20 backdrop-blur-sm overflow-hidden group transition-all hover:translate-y-[-5px]">
                <CardContent className="p-5">
                  <div className="bg-space-purple/20 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-space-purple/30 transition-colors">
                    <Brain className="text-space-purple-light" size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Self-Awareness</h3>
                  <p className="text-gray-300 text-sm">Understand strengths and areas for growth</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-space-blue-light/40 to-space-blue-light/10 border-space-purple/20 backdrop-blur-sm overflow-hidden group transition-all hover:translate-y-[-5px]">
                <CardContent className="p-5">
                  <div className="bg-space-purple/20 p-2 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-space-purple/30 transition-colors">
                    <Lightbulb className="text-space-purple-light" size={22} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Teamwork</h3>
                  <p className="text-gray-300 text-sm">Collaborate effectively with diverse team members</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Call to Action - More compact and engaging */}
            <div className="bg-gradient-to-r from-space-purple/20 via-space-purple/30 to-space-purple/20 p-6 rounded-xl border border-space-purple/30 shadow-lg shadow-space-purple/10">
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-4 md:mb-0">
                  <GraduationCap size={30} className="text-space-purple-light mr-4" />
                  <div>
                    <h3 className="text-xl font-bold">Ready to develop future-proof skills?</h3>
                    <p className="text-gray-300 text-sm">Join our specialized programs combining space science with essential human skills</p>
                  </div>
                </div>
                <a 
                  href="/contact" 
                  className="flex items-center px-6 py-2.5 bg-space-purple hover:bg-space-purple-light text-white font-semibold rounded-lg transition-colors group"
                >
                  <span>Get Started</span>
                  <ChevronRight size={18} className="ml-1 transform transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Maxme;
