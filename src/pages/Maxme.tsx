
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, MessageSquare, Users, Lightbulb, GraduationCap } from 'lucide-react';

const Maxme = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Header Section */}
        <section className="relative mb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-48 h-48 bg-[#5935E8] flex items-center justify-center rounded-lg p-4 mb-6">
                <img 
                  src="/lovable-uploads/5571d328-32e6-47df-b3b6-0e752cb3d10f.png" 
                  alt="Maxme Logo" 
                  className="w-full"
                />
              </div>
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                MAX AI
              </h1>
              <p className="text-xl md:text-2xl font-light mb-2 text-gray-300">
                Mindful Advancement & eXploration Australia - India
              </p>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mt-6 italic">
                "We've joined forces with Maxme to equip learners with the critical human-centric skills needed to excel in an AI-driven world."
              </p>
            </div>
          </div>
        </section>
        
        {/* Partnership Overview */}
        <section className="py-16 relative overflow-hidden bg-space-blue-dark">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-space-blue to-transparent opacity-70"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Partnership <span className="text-space-purple">Overview</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  We believe that preparing young minds for a rapidly changing future goes beyond just technical proficiency. By joining hands with Maxme, our goal is to ensure students gain the essential interpersonal, leadership, and communication skills that will set them apart in today's AI-dominated landscape.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  This collaboration is designed to integrate seamlessly into educational institutions, offering holistic learning experiences that foster resilience, critical thinking, and collaborative problem-solving. We also celebrate our shared vision through meaningful milestones—including our official partnership signing.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl overflow-hidden shadow-lg shadow-space-purple/20 transform transition-transform hover:scale-[1.02]">
                  <img 
                    src="/lovable-uploads/5a4853c2-a6b7-441c-9e63-a86776e23509.png" 
                    alt="Partnership signing ceremony" 
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg shadow-space-purple/20 transform transition-transform hover:scale-[1.02]">
                  <img 
                    src="/lovable-uploads/e52d7e4d-ca6d-4296-a1d3-3192d5f91e61.png" 
                    alt="Partnership signing moment" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Maxme */}
        <section className="py-16 relative">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              About <span className="text-space-purple">Maxme</span>
            </h2>
            
            <div className="max-w-4xl mx-auto space-y-8">
              <p className="text-gray-300 text-center leading-relaxed">
                Maxme is an Australian EdTech leader specializing in human skill development. Their programs focus on building Communication, Leadership, Teamwork, and Self-Awareness—critical strengths that empower learners to tackle future challenges confidently.
              </p>
              
              <p className="text-gray-300 text-center leading-relaxed">
                With established relationships across industry and academia, including collaborations with Deloitte, PwC, and Monash University, Maxme's track record of impactful professional development makes them the ideal partner in this transformative journey.
              </p>
            </div>
            
            {/* Core Skills Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <Card className="bg-space-blue-light/60 border-space-purple/20 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-6">
                  <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-space-purple/30 transition-colors">
                    <MessageSquare className="text-space-purple-light" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Communication</h3>
                  <p className="text-gray-300">Express ideas clearly and listen effectively to collaborate in any environment</p>
                </CardContent>
              </Card>
              
              <Card className="bg-space-blue-light/60 border-space-purple/20 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-6">
                  <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-space-purple/30 transition-colors">
                    <Users className="text-space-purple-light" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Leadership</h3>
                  <p className="text-gray-300">Develop the confidence to guide teams and inspire others to achieve shared goals</p>
                </CardContent>
              </Card>
              
              <Card className="bg-space-blue-light/60 border-space-purple/20 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-6">
                  <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-space-purple/30 transition-colors">
                    <Brain className="text-space-purple-light" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Self-Awareness</h3>
                  <p className="text-gray-300">Understand your strengths and areas for growth to navigate challenges with confidence</p>
                </CardContent>
              </Card>
              
              <Card className="bg-space-blue-light/60 border-space-purple/20 backdrop-blur-sm overflow-hidden group">
                <CardContent className="p-6">
                  <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-space-purple/30 transition-colors">
                    <Lightbulb className="text-space-purple-light" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Teamwork</h3>
                  <p className="text-gray-300">Collaborate effectively with diverse team members to solve complex problems together</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Call to Action */}
            <div className="flex flex-col items-center mt-16 text-center">
              <GraduationCap size={36} className="text-space-purple mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to develop future-proof skills?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl">
                Join our specialized programs that combine space science education with essential human skills development through our Maxme partnership.
              </p>
              <a 
                href="/contact" 
                className="px-8 py-3 bg-space-purple hover:bg-space-purple-light text-white font-semibold rounded-lg transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Maxme;
