
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
        <section className="py-20 px-4">
          <div className="container mx-auto">
            {/* New Personalized Education Section */}
            <div className="max-w-4xl mx-auto mb-20 text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-8">
                Personalized Space Education for Every Learner
              </h1>
              
              <div className="space-card p-8 relative overflow-hidden backdrop-blur-md">
                <div className="absolute top-0 right-0 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-space-neon/10 rounded-full blur-3xl"></div>
                
                <p className="text-lg text-gray-200 mb-8">
                  At <span className="font-bold text-space-purple-light">iSpace</span>, we understand that every student and school is unique. That's why we deliver <span className="font-bold text-space-purple-light">customized space education programs</span>, meticulously tailored to meet specific learning needs and academic goals. Partnering with educators, we design dynamic courses and workshops that seamlessly integrate with school curricula, empowering students to explore the cosmos their way.
                </p>
                
                <div className="mt-8">
                  <h3 className="text-xl font-orbitron mb-6">What We Offer</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Interstellar Academies
            </h1>
            
            <p className="text-xl text-center text-gray-300 max-w-3xl mx-auto mb-16">
              3 Learning Levels (Tiered Galactic Training) - 100 to 150 Hours of Learning in one academic year
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Nebula Navigators */}
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
              
              {/* Orbit Pioneers */}
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
              
              {/* Starship Innovators */}
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
            
            {/* How This Course Benefits Students section - Redesigned */}
            <div className="mt-20 max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-block relative mb-4">
                  <Star className="text-space-purple-light w-8 h-8 animate-pulse-glow" />
                  <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-orbitron bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent mb-2">
                  How This Course Benefits Students
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                  Our comprehensive space education program provides students with valuable skills and experiences that extend far beyond the classroom.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Benefit Cards */}
                <div className="space-card p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-purple/10 via-space-neon/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <GraduationCap className="text-space-purple w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron text-base">STEM Skills</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    Develops mathematical, analytical, and coding proficiency through hands-on projects and problem-solving activities.
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-space-purple/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-space-purple rounded-full"></div>
                      <span className="text-xs text-space-purple-light">Critical Thinking</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-card p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-neon/10 via-space-purple/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-space-neon/20 flex items-center justify-center">
                      <Rocket className="text-space-neon w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron text-base">Real-World Experience</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    Encourages students to apply theoretical knowledge through hands-on space experiments, engineering challenges, and collaborative projects.
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-space-neon/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-space-neon rounded-full"></div>
                      <span className="text-xs text-space-neon">Practical Skills</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-card p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-purple-light/10 via-space-purple/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-space-purple-light/20 flex items-center justify-center">
                      <Award className="text-space-purple-light w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron text-base">Career Readiness</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    Prepares students for space technology careers, university admissions, and scholarships through industry-relevant skills development.
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-space-purple-light/10">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-space-purple-light rounded-full"></div>
                      <span className="text-xs text-space-purple-light">Future Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="space-card p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-purple/10 via-space-neon/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Globe className="text-space-purple w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron text-base">Global Exposure</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    Offers international collaboration opportunities with partner schools and expert mentorship from leading space industry professionals.
                  </p>
                </div>
                
                <div className="space-card p-6 relative overflow-hidden h-full flex flex-col">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-space-neon/10 via-space-purple/5 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-space-neon/20 flex items-center justify-center">
                      <Lightbulb className="text-space-neon w-6 h-6" />
                    </div>
                    <h3 className="font-orbitron text-base">Leadership & Innovation</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    Enhances teamwork, research capabilities, and problem-solving abilities through space-themed competitions, hackathons, and innovation challenges.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Why Schools Should Start This Course section - Redesigned */}
            <div className="mt-20 max-w-5xl mx-auto">
              <div className="text-center mb-10">
                <div className="inline-block relative mb-4">
                  <Building className="text-space-neon w-8 h-8 animate-pulse-glow" />
                  <div className="absolute top-0 left-0 w-8 h-8 bg-space-neon/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
                </div>
                <h2 className="text-2xl md:text-3xl font-orbitron bg-gradient-to-r from-white via-space-neon to-white bg-clip-text text-transparent mb-2">
                  Why Schools Should Start This Course
                </h2>
                <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                  Implementing our space education program offers numerous advantages for forward-thinking educational institutions.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Reason Cards */}
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <LineChart className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Future Relevance</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Space technology is increasingly influencing industries such as weather forecasting, aerospace engineering, telecommunications, remote sensing, navigation, defense, mining, and environmental sustainability.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Code className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">STEM Enhancement</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    The program strengthens students' skills in mathematics, physics, reasoning, and coding, fostering a strong STEM foundation essential for future academic and career success.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Users className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Career Readiness</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    It provides practical exposure to high-demand careers in the space industry and adjacent fields, giving students a competitive advantage in their future endeavors.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Award className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">International Recognition</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Schools offering space programs gain recognition on global educational platforms, increasing their academic standing and attracting high-quality students and partnerships.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Rocket className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Hands-On Learning</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Students engage in DIY space projects, coding exercises, and satellite development, making learning more interactive, impactful, and engaging for all participants.
                  </p>
                </div>
                
                <div className="bg-space-blue-light/20 border border-space-purple/10 rounded-lg p-6 backdrop-blur-sm transition-all duration-300 hover:border-space-purple/30 hover:bg-space-blue-light/30">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center">
                      <Globe className="text-space-purple w-5 h-5" />
                    </div>
                    <h3 className="font-orbitron text-sm">Global Network</h3>
                  </div>
                  
                  <p className="text-gray-300 text-xs">
                    Schools join an international network of educational institutions focused on space education, opening doors to collaborative projects and shared resources.
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
