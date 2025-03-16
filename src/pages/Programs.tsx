
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Atom, Rocket, Telescope } from 'lucide-react';

const Programs = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Interstellar Academies
            </h1>
            
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
              3 Learning Levels (Tiered Galactic Training) - 100 to 150 Hours of Learning in one academic year
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="space-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-purple/10 rounded-full blur-xl" />
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-space-purple/20 flex items-center justify-center">
                    <Atom className="text-space-purple w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron text-center mb-4">
                  Nebula Navigators
                </h3>
                <p className="text-gray-400 text-center mb-2">(Grades 3-6)</p>
                
                <div className="border-t border-space-purple/20 my-4"></div>
                
                <h4 className="font-semibold mb-2">Objective:</h4>
                <p className="text-gray-300 mb-4">Introduce young learners to fundamental space concepts in an engaging and interactive manner.</p>
                
                <h4 className="font-semibold mb-2">Curriculum:</h4>
                <ul className="text-gray-300 space-y-1 mb-4 list-disc list-inside">
                  <li>Basic astronomy and the solar system</li>
                  <li>Introduction to gravity and space physics</li>
                  <li>Hands-on activities such as building simple models of planets and rockets</li>
                  <li>Space-themed storytelling and creative visualization exercises</li>
                </ul>
                
                <h4 className="font-semibold mb-2">Key Learning Outcomes:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>Develop curiosity about space and science</li>
                  <li>Strengthen problem-solving and observational skills</li>
                </ul>
              </div>
              
              <div className="space-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-neon/10 rounded-full blur-xl" />
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-space-neon/20 flex items-center justify-center">
                    <Telescope className="text-space-neon w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron text-center mb-4">
                  Orbit Pioneers
                </h3>
                <p className="text-gray-400 text-center mb-2">(Grades 7-9)</p>
                
                <div className="border-t border-space-neon/20 my-4"></div>
                
                <h4 className="font-semibold mb-2">Objective:</h4>
                <p className="text-gray-300 mb-4">Strengthen foundational STEM knowledge with practical applications in space science and technology.</p>
                
                <h4 className="font-semibold mb-2">Curriculum:</h4>
                <ul className="text-gray-300 space-y-1 mb-4 list-disc list-inside">
                  <li>Fundamentals of orbital mechanics and satellite communication</li>
                  <li>Basics of spacecraft structure and aerodynamics</li>
                  <li>Introduction to space robotics with hands-on assembly</li>
                  <li>Introduction to coding for space applications</li>
                </ul>
                
                <h4 className="font-semibold mb-2">Key Learning Outcomes:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>Strengthen analytical thinking and teamwork</li>
                  <li>Develop coding and engineering problem-solving skills</li>
                </ul>
              </div>
              
              <div className="space-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-purple-light/10 rounded-full blur-xl" />
                
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-full bg-space-purple-light/20 flex items-center justify-center">
                    <Rocket className="text-space-purple-light w-8 h-8" />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron text-center mb-4">
                  Starship Innovators
                </h3>
                <p className="text-gray-400 text-center mb-2">(Grades 10-12)</p>
                
                <div className="border-t border-space-purple-light/20 my-4"></div>
                
                <h4 className="font-semibold mb-2">Objective:</h4>
                <p className="text-gray-300 mb-4">Provide advanced knowledge and hands-on experience in space technology and engineering.</p>
                
                <h4 className="font-semibold mb-2">Curriculum:</h4>
                <ul className="text-gray-300 space-y-1 mb-4 list-disc list-inside">
                  <li>Detailed study of satellite orbits and propulsion systems</li>
                  <li>Design and testing of simple rocket models</li>
                  <li>Hands-on nano-satellite prototyping and programming</li>
                  <li>Space mission planning fundamentals</li>
                </ul>
                
                <h4 className="font-semibold mb-2">Key Learning Outcomes:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside">
                  <li>Gain in-depth exposure to space engineering concepts</li>
                  <li>Develop project management and research skills</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-20 max-w-3xl mx-auto space-card p-8">
              <h2 className="text-2xl font-orbitron text-center mb-6">Why Schools Should Start This Course</h2>
              
              <ul className="text-gray-300 space-y-4 mb-4">
                <li className="flex gap-3">
                  <span className="text-space-purple font-bold">•</span>
                  <span><strong>Future Relevance:</strong> Space technology is increasingly influencing industries such as weather forecasting, aerospace engineering, telecommunications, remote sensing, navigation, defense, mining, and environmental sustainability.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-space-purple font-bold">•</span>
                  <span><strong>STEM Enhancement:</strong> The program strengthens students' skills in mathematics, physics, reasoning, and coding, fostering a strong STEM foundation.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-space-purple font-bold">•</span>
                  <span><strong>Career Readiness:</strong> It provides practical exposure to high-demand careers in the space industry and adjacent fields.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-space-purple font-bold">•</span>
                  <span><strong>International Recognition:</strong> Schools offering space programs gain recognition on global educational platforms, increasing their academic standing.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-space-purple font-bold">•</span>
                  <span><strong>Hands-On Learning:</strong> Students engage in DIY space projects, coding exercises, and satellite development, making learning more interactive and impactful.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Programs;
