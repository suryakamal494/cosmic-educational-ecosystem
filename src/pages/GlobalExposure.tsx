
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Plane, GraduationCap, Users, Award, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GlobalExposure = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Global Exposure
                </span>
              </h1>
              <div className="w-24 h-1 bg-space-purple mx-auto mb-6"></div>
              <h2 className="text-xl md:text-2xl text-space-purple-light mb-6">Launching Futures Beyond Borders</h2>
              
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                In a world without boundaries, <strong>global exposure</strong> is the key to unlocking a student's potential. 
                At <strong>iSpace</strong>, we're redefining space education by connecting students to the 
                <strong> international space community</strong> through hands-on, real-world experiences.
              </p>
              
              <p className="text-gray-300 max-w-3xl mx-auto mt-4 leading-relaxed">
                Our <strong>Global Exposure Program</strong> offers students unparalleled access to
                <strong> international space agencies, top universities, global workshops, and prestigious competitions</strong>,
                equipping them with the skills, networks, and vision to thrive in the ever-evolving space industry.
              </p>
            </motion.div>
            
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-orbitron text-center mb-8">
                <span className="text-space-purple-light">🌎</span> What Sets iSpace's Global Exposure Apart?
              </h2>
              
              <Tabs defaultValue="agencies" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-space-blue-light/50 p-2 mb-8">
                  <TabsTrigger value="agencies" className="data-[state=active]:bg-space-purple data-[state=active]:text-white">
                    <Plane className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">Space Agencies</span>
                    <span className="md:hidden">Agencies</span>
                  </TabsTrigger>
                  <TabsTrigger value="pre-university" className="data-[state=active]:bg-space-purple data-[state=active]:text-white">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">Pre-University</span>
                    <span className="md:hidden">Education</span>
                  </TabsTrigger>
                  <TabsTrigger value="collaborations" className="data-[state=active]:bg-space-purple data-[state=active]:text-white">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">Collaborations</span>
                    <span className="md:hidden">Teams</span>
                  </TabsTrigger>
                  <TabsTrigger value="workshops" className="data-[state=active]:bg-space-purple data-[state=active]:text-white">
                    <Award className="w-4 h-4 mr-2" />
                    <span className="hidden md:inline">Workshops & Competitions</span>
                    <span className="md:hidden">Events</span>
                  </TabsTrigger>
                </TabsList>
                
                <div className="mt-2 space-card p-6 md:p-8">
                  <TabsContent value="agencies" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-32 h-32 bg-space-purple/30 rounded-full flex items-center justify-center">
                          <Plane className="w-16 h-16 text-space-purple-light" />
                          <div className="absolute w-full h-full rounded-full border-2 border-space-purple-light/30 animate-ping"></div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-orbitron text-space-purple-light mb-4">
                          ✈️ Visits to International Space Agencies
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Step inside the heart of space exploration with exclusive tours of <strong>world-renowned space facilities</strong>.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Behind-the-Scenes Access</strong> – Explore cutting-edge labs, satellite launch sites, and mission control centers at space centers.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Real-World Inspiration</strong> – Witness space technology in action and meet the pioneers shaping the cosmos.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pre-university" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-32 h-32 bg-space-purple/30 rounded-full flex items-center justify-center">
                          <GraduationCap className="w-16 h-16 text-space-purple-light" />
                          <div className="absolute w-full h-full rounded-full border-2 border-space-purple-light/30 animate-ping"></div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-orbitron text-space-purple-light mb-4">
                          🎓 Pre-University Programs with Global Reach
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Why wait for college to dive into space education? Our pre-university programs bridge the gap with:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>University-Level Learning</strong> – Engage in STEM and space-focused courses designed by leading institutions.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Mentorship from Experts</strong> – Receive guidance from <strong>space scientists, engineers, and astronauts</strong> to explore career paths early.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Competitive Edge</strong> – Build a standout profile for university applications with real-world academic experience.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="collaborations" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-32 h-32 bg-space-purple/30 rounded-full flex items-center justify-center">
                          <Users className="w-16 h-16 text-space-purple-light" />
                          <div className="absolute w-full h-full rounded-full border-2 border-space-purple-light/30 animate-ping"></div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-orbitron text-space-purple-light mb-4">
                          🌍 International Collaborations
                        </h3>
                        <p className="text-gray-300 mb-4">
                          The space industry thrives on teamwork—and so do we. Through <strong>virtual and in-person exchange programs</strong>, students connect with peers and professionals worldwide.
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Cross-Cultural Innovation</strong> – Collaborate with students from diverse backgrounds to solve global challenges.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Expert-Led Projects</strong> – Work alongside industry leaders from top space organizations.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Global Perspective</strong> – Develop a worldview that prepares you for a career without borders.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="workshops" className="mt-0">
                    <div className="flex flex-col md:flex-row gap-6 items-center">
                      <div className="md:w-1/3 flex justify-center">
                        <div className="relative w-32 h-32 bg-space-purple/30 rounded-full flex items-center justify-center">
                          <Award className="w-16 h-16 text-space-purple-light" />
                          <div className="absolute w-full h-full rounded-full border-2 border-space-purple-light/30 animate-ping"></div>
                        </div>
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl font-orbitron text-space-purple-light mb-4">
                          🏆 Global Workshops & Competitions
                        </h3>
                        <p className="text-gray-300 mb-4">
                          Your ideas deserve a global stage. At iSpace, students shine through:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Hands-On Workshops</strong> – Participate in international training sessions led by space experts.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Prestigious Competitions</strong> – Compete in world-class events, showcasing your innovations to industry giants.</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-space-purple mr-2">✅</span>
                            <span><strong>Networking Opportunities</strong> – Build connections with <strong>scientists, astronauts, and space entrepreneurs</strong> that last a lifetime.</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
            
            <motion.div 
              className="space-card text-center py-10 px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Globe className="w-16 h-16 text-space-purple-light mx-auto mb-4" />
              <h3 className="text-2xl font-orbitron mb-4">
                🚀 Join the Global Space Revolution with iSpace!
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto mb-6">
                At iSpace, we don't just teach space—we immerse students in the <strong>international space community</strong>. 
                From touring <strong>iconic space agencies</strong> and mastering pre-university programs to forging 
                <strong> global collaborations</strong> and competing on the world stage, our <strong>Global Exposure Program</strong> 
                prepares students to become the <strong>scientists, innovators, and leaders</strong> of tomorrow.
              </p>
              
              {/* Changed to Link component to redirect to Contact page */}
              <Link to="/contact">
                <Button className="space-button font-orbitron text-sm tracking-wider group">
                  Contact Us <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GlobalExposure;
