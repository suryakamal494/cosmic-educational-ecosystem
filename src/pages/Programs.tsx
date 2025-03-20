
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Atom, Rocket, Telescope, Star, Users, Book, Code, Globe, Award, GraduationCap, Lightbulb, LineChart, Building } from 'lucide-react';

const Programs = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-20">
        <section className="py-12 px-4">
          <div className="container mx-auto">
            {/* Personalized Education Section - with smaller font size */}
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6">
                Personalized Space Education for Every Learner
              </h1>
              
              <div className="space-card p-6 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-space-neon/10 rounded-full blur-3xl"></div>
                
                <p className="text-base text-gray-200 mb-6">
                  At <span className="font-bold text-space-purple-light">iSpace</span>, we understand that every student and school is unique. That's why we deliver <span className="font-bold text-space-purple-light">customized space education programs</span>, meticulously tailored to meet specific learning needs and academic goals. Partnering with educators, we design dynamic courses and workshops that seamlessly integrate with school curricula, empowering students to explore the cosmos their way.
                </p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-orbitron mb-4">What We Offer</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                        <Book className="text-space-purple w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Flexible Program Options</p>
                        <p className="text-gray-300 text-sm">From intensive one-month workshops to comprehensive year-long courses.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-space-neon/20 flex items-center justify-center">
                        <Code className="text-space-neon w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Tailored Curriculum</p>
                        <p className="text-gray-300 text-sm">Crafted to align with school standards and student proficiency levels.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-space-purple-light/20 flex items-center justify-center">
                        <Star className="text-space-purple-light w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Immersive Learning</p>
                        <p className="text-gray-300 text-sm">Hands-on projects, real-world applications, and interactive experiences.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                        <Users className="text-space-purple w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-white font-semibold">Expert Instruction</p>
                        <p className="text-gray-300 text-sm">Led by aerospace engineers, scientists, and seasoned STEM educators.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Changed "Interstellar Academies" to "Our Top Space Programs" */}
            <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Our Top Space Programs
            </h1>
            
            {/* Removed subtitle about 3 Learning Levels */}
            
            {/* More compact card grid with cleaner design */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {/* Nebula Navigators */}
              <div className="space-card p-5 relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-purple/10 rounded-full blur-xl" />
                
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-space-purple/20 flex items-center justify-center">
                    <Atom className="text-space-purple w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron text-center mb-2">
                  Nebula Navigators
                </h3>
                <p className="text-gray-400 text-center mb-2 text-sm">(Grades 3-6)</p>
                
                <div className="border-t border-space-purple/20 my-3"></div>
                
                <h4 className="font-semibold mb-1 text-sm">Objective:</h4>
                <p className="text-gray-300 mb-3 text-sm">Introduce young learners to fundamental space concepts in an engaging and interactive manner.</p>
                
                <h4 className="font-semibold mb-1 text-sm">Key Learning Outcomes:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside text-sm">
                  <li>Develop curiosity about space and science</li>
                  <li>Strengthen problem-solving and observational skills</li>
                </ul>
              </div>
              
              {/* Orbit Pioneers */}
              <div className="space-card p-5 relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-neon/10 rounded-full blur-xl" />
                
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-space-neon/20 flex items-center justify-center">
                    <Telescope className="text-space-neon w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron text-center mb-2">
                  Orbit Pioneers
                </h3>
                <p className="text-gray-400 text-center mb-2 text-sm">(Grades 7-9)</p>
                
                <div className="border-t border-space-neon/20 my-3"></div>
                
                <h4 className="font-semibold mb-1 text-sm">Objective:</h4>
                <p className="text-gray-300 mb-3 text-sm">Strengthen foundational STEM knowledge with practical applications in space science and technology.</p>
                
                <h4 className="font-semibold mb-1 text-sm">Key Learning Outcomes:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside text-sm">
                  <li>Strengthen analytical thinking and teamwork</li>
                  <li>Develop coding and engineering problem-solving skills</li>
                </ul>
              </div>
              
              {/* Starship Innovators */}
              <div className="space-card p-5 relative overflow-hidden transition-all duration-300 hover:translate-y-[-5px]">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-purple-light/10 rounded-full blur-xl" />
                
                <div className="flex justify-center mb-4">
                  <div className="w-14 h-14 rounded-full bg-space-purple-light/20 flex items-center justify-center">
                    <Rocket className="text-space-purple-light w-7 h-7" />
                  </div>
                </div>
                
                <h3 className="text-xl font-orbitron text-center mb-2">
                  Starship Innovators
                </h3>
                <p className="text-gray-400 text-center mb-2 text-sm">(Grades 10-12)</p>
                
                <div className="border-t border-space-purple-light/20 my-3"></div>
                
                <h4 className="font-semibold mb-1 text-sm">Objective:</h4>
                <p className="text-gray-300 mb-3 text-sm">Provide advanced knowledge and hands-on experience in space technology and engineering.</p>
                
                <h4 className="font-semibold mb-1 text-sm">Key Learning Outcomes:</h4>
                <ul className="text-gray-300 space-y-1 list-disc list-inside text-sm">
                  <li>Gain in-depth exposure to space engineering concepts</li>
                  <li>Develop project management and research skills</li>
                </ul>
              </div>
            </div>
            
            {/* Consolidated "Benefits" section with cleaner design */}
            <div className="mt-16 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block relative mb-4">
                  <Star className="text-space-purple-light w-7 h-7 animate-pulse-glow" />
                  <div className="absolute top-0 left-0 w-7 h-7 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h2 className="text-2xl font-orbitron bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent mb-2">
                  How This Course Benefits Students
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* Benefit Cards - More compact layout */}
                <div className="space-card p-4 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-purple/10 via-space-neon/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <GraduationCap className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">STEM Skills</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-4 flex-grow">
                    Develops mathematical, analytical, and coding proficiency through hands-on projects and problem-solving activities.
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-space-purple/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-space-purple rounded-full"></div>
                      <span className="text-xs text-space-purple-light">Critical Thinking</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-card p-4 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-neon/10 via-space-purple/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-space-neon/20 flex items-center justify-center">
                      <Rocket className="text-space-neon w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Real-World Experience</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-4 flex-grow">
                    Encourages students to apply theoretical knowledge through hands-on space experiments, engineering challenges, and collaborative projects.
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-space-neon/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-space-neon rounded-full"></div>
                      <span className="text-xs text-space-neon">Practical Skills</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-card p-4 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-purple-light/10 via-space-purple/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-space-purple-light/20 flex items-center justify-center">
                      <Award className="text-space-purple-light w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Career Readiness</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-4 flex-grow">
                    Prepares students for space technology careers, university admissions, and scholarships through industry-relevant skills development.
                  </p>
                  
                  <div className="mt-auto pt-3 border-t border-space-purple-light/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-space-purple-light rounded-full"></div>
                      <span className="text-xs text-space-purple-light">Future Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                <div className="space-card p-4 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-purple/10 via-space-neon/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Globe className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Global Exposure</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-4 flex-grow">
                    Offers international collaboration opportunities with partner schools and expert mentorship from leading space industry professionals.
                  </p>
                </div>
                
                <div className="space-card p-4 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-neon/10 via-space-purple/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-space-neon/20 flex items-center justify-center">
                      <Lightbulb className="text-space-neon w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Leadership & Innovation</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs mb-4 flex-grow">
                    Enhances teamwork, research capabilities, and problem-solving abilities through space-themed competitions, hackathons, and innovation challenges.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why Schools Should Start This Course section - Reordered and Redesigned */}
            <div className="mt-14 max-w-5xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-block relative mb-4">
                  <Building className="text-space-neon w-7 h-7 animate-pulse-glow" />
                  <div className="absolute top-0 left-0 w-7 h-7 bg-space-neon/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h2 className="text-2xl font-orbitron bg-gradient-to-r from-white via-space-neon to-white bg-clip-text text-transparent mb-2">
                  Why Schools Should Start This Course
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Reordered cards per request: 1. International Recognition, 2. Global Network, 3. Future Relevance, 4. STEM Enhancement */}
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Award className="text-space-purple w-4 h-4" />
                    </div>
                    <h3 className="font-orbitron text-xs">International Recognition</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Schools offering space programs gain recognition on global educational platforms, increasing their academic standing and attracting high-quality students and partnerships.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Globe className="text-space-purple w-4 h-4" />
                    </div>
                    <h3 className="font-orbitron text-xs">Global Network</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Schools join an international network of educational institutions focused on space education, opening doors to collaborative projects and shared resources.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <LineChart className="text-space-purple w-4 h-4" />
                    </div>
                    <h3 className="font-orbitron text-xs">Future Relevance</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Space technology is increasingly influencing industries such as weather forecasting, aerospace engineering, telecommunications, remote sensing, navigation, and environmental sustainability.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-4 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Code className="text-space-purple w-4 h-4" />
                    </div>
                    <h3 className="font-orbitron text-xs">STEM Enhancement</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    The program strengthens students' skills in mathematics, physics, reasoning, and coding, fostering a strong STEM foundation essential for future academic and career success.
                  </p>
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

export default Programs;
