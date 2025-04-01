
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StarryBackground from '@/components/StarryBackground';
import { Handshake, Users, Sparkles } from 'lucide-react';

const Maxme = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="flex flex-col items-center justify-center text-center mb-12">
            <div className="w-48 h-48 bg-[#5935E8] flex items-center justify-center rounded-lg p-6 mb-8">
              <img 
                src="/lovable-uploads/520695e1-5650-4379-9d36-7a0b7dff76fc.png" 
                alt="Maxme Logo" 
                className="w-full"
              />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Maxme Partnership</h1>
            <p className="text-gray-300 text-lg max-w-3xl">
              Empowering students with essential entrepreneurial and leadership skills through innovative programs and methodologies.
            </p>
          </div>
          
          {/* Partnership Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Handshake className="text-space-purple-light" size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Collaborative Education</h2>
              <p className="text-gray-300">
                Our partnership with Maxme brings world-class entrepreneurial development programs to space education, creating a unique blend of STEM and business acumen for our students.
              </p>
            </div>
            
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Users className="text-space-purple-light" size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Skill Development</h2>
              <p className="text-gray-300">
                Together with Maxme, we focus on developing critical soft skills including communication, teamwork, problem-solving, and leadership—essentials for future space industry professionals.
              </p>
            </div>
            
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="bg-space-purple/20 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <Sparkles className="text-space-purple-light" size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Innovation Focus</h2>
              <p className="text-gray-300">
                The partnership combines Maxme's expertise in entrepreneurial thinking with our space science curriculum, fostering innovation and creative problem-solving in real-world space challenges.
              </p>
            </div>
            
            <div className="bg-space-blue-light/30 backdrop-blur-sm p-8 rounded-xl border border-space-purple/20">
              <div className="h-full flex flex-col justify-center">
                <blockquote className="italic text-lg text-gray-300 border-l-4 border-space-purple pl-4">
                  "Our collaboration with Maxme enables students to not just understand space science, but to envision themselves as the entrepreneurs and leaders who will drive the future of space exploration and technology."
                </blockquote>
                <p className="text-right mt-4 text-space-purple-light">— iSPACE Program Director</p>
              </div>
            </div>
          </div>
          
          {/* More Information */}
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Our Specialized Programs</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Experience the unique benefits of our Maxme partnership through specialized workshops, 
              entrepreneurial projects, and leadership development activities integrated into our space science curriculum.
            </p>
            <a 
              href="/programs" 
              className="inline-block px-8 py-3 bg-space-purple hover:bg-space-purple-light transition-colors rounded-lg font-semibold"
            >
              Explore Our Programs
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Maxme;
