import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Telescope, Cpu, Globe, Zap, Star, Users, BrainCircuit, FlaskConical, Atom, Check, Award, CalendarClock, MapPin, School, BookOpen, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from "react-router-dom";


const FeatureCard = ({ icon, title, description, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    className={cn("overflow-hidden group", className)}
  >
    <div className="h-full relative bg-space-blue-light/10 backdrop-blur-sm border border-space-purple/10 rounded-xl p-6 transition-all duration-300 hover:border-space-purple/30 hover:shadow-lg">
      <div className="absolute top-0 right-0 w-24 h-24 bg-space-purple/5 rounded-full blur-xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-20 h-20 bg-space-neon/5 rounded-full blur-lg transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="bg-space-purple/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-space-purple-light transition-all duration-300 group-hover:bg-space-purple/20">
        {icon}
      </div>
      
      <h3 className="text-lg font-orbitron mb-3 text-white">{title}</h3>
      <p className="text-gray-300 text-sm">{description}</p>
    </div>
  </motion.div>
);

const Labs = () => {
  const offerings = [
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "100 DIY Space Projects",
      description: "Hands-on learning through buildable models, experiments, and simulations that bring space science to life in the classroom."
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "2 Space Hackathons",
      description: "Intensive problem-solving competitions focused on space challenges that develop teamwork and critical thinking skills."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "12 Expert Talks",
      description: "Regular hybrid sessions with space scientists, astronauts, and industry leaders providing real-world insights."
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Science Exhibition",
      description: "Annual showcase of student projects and innovations that celebrates achievement and builds confidence."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Space on Wheels",
      description: "Mobile space learning experience bringing astronomy and space science to your school and community."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Creative Problem Solving",
      description: "Workshops facilitated by international experts from USA & Finland, teaching innovative approaches to complex challenges."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "International Events",
      description: "Participation in global space education conferences and competitions, connecting students to the worldwide space community."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "International Trips",
      description: "Visits to leading space facilities worldwide offering unparalleled exposure to cutting-edge research and technology."
    }
  ];

  const benefits = [
    "Enhanced STEM curriculum with real-world applications",
    "Increased student engagement and academic performance",
    "Development of critical 21st-century skills",
    "Unique differentiator for school's educational offerings",
    "Direct connections to higher education and industry pathways",
    "Inspiring the next generation of scientists and engineers"
  ];

  return (
    <div className="min-h-screen bg-space-blue text-white overflow-x-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-28 pb-20 relative z-10">
        {/* Hero Section */}
        <section className="relative">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1800')] bg-cover bg-center opacity-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-space-blue via-space-blue/95 to-space-blue"></div>
          
          <div className="container mx-auto px-4 relative z-10 py-16">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center text-center mb-12"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-space-purple/10 mb-6">
                  <Atom className="h-8 w-8 text-space-purple-light" />
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-orbitron mb-6">
                  <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                    Activities
                  </span>
                </h1>
                
                <div className="h-1 w-32 bg-gradient-to-r from-space-purple to-space-neon/50 mx-auto mb-6"></div>
                
                <p className="text-xl text-gray-300 max-w-3xl">
                  At <strong>iSpace</strong>, we offer <strong>cutting-edge space education programs</strong> tailored for forward-thinking schools. Our hands-on, tech-driven modules seamlessly integrate with existing curricula, transforming classrooms into launchpads for innovation. Schools can customize their learning experience by selecting from a wide range of <strong>immersive, future-ready activities</strong> designed to inspire the next generation of explorers. 🚀
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-space-blue-light/5 border border-space-purple/20 rounded-2xl overflow-hidden"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="p-8 md:p-12">
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-space-purple/20 text-space-purple-light text-xs mb-6">
                      <School className="w-3.5 h-3.5 mr-2" /> 
                      Premium School Partnership
                    </div>
                    
                    <h2 className="text-2xl md:text-3xl font-orbitron mb-4">Complete Space Education Ecosystem</h2>
                    
                    <p className="text-gray-300 mb-6">
                      Equip your school with next-generation space education resources that inspire curiosity, 
                      develop critical skills, and prepare students for future careers in science and technology.
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="mt-1 text-space-purple-light">
                            <Check className="w-4 h-4" />
                          </div>
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="inline-flex items-center gap-2 text-space-purple-light">
                      <Sparkles className="w-4 h-4" />
                      <span className="font-medium">Trusted by leading educational institutions across India</span>
                    </div>
                  </div>
                  
                  <div className="relative h-60 md:h-auto overflow-hidden bg-space-blue-light/20">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1800')] bg-cover bg-center opacity-30 mix-blend-luminosity"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-space-blue to-transparent"></div>
                    
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative z-10 p-8 md:p-12 text-center">
                        <div className="w-20 h-20 mx-auto rounded-full bg-space-purple/20 flex items-center justify-center mb-4">
                          <FlaskConical className="w-10 h-10 text-space-purple-light" />
                        </div>
                        <h3 className="font-orbitron text-xl mb-2">State-of-the-Art Facilities</h3>
                        <p className="text-gray-300 max-w-xs mx-auto">
                          Cutting-edge equipment and specialized learning spaces that transform your school into a space innovation hub
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-orbitron mb-4">Comprehensive Education Package</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Everything your school needs to deliver a world-class space education experience
                </p>
              </motion.div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {offerings.map((offering, index) => (
                  <FeatureCard 
                    key={index}
                    icon={offering.icon}
                    title={offering.title}
                    description={offering.description}
                    delay={0.1 * index}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Lab Facilities */}
        <section className="py-16 relative">
          <div className="absolute right-0 top-0 w-72 h-72 bg-space-purple/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70"></div>
          <div className="absolute left-0 bottom-0 w-96 h-96 bg-space-neon/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-orbitron mb-4">Advanced Lab Facilities</h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  State-of-the-art equipment and technology that brings space science to life
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <Card className="bg-space-blue-light/10 border-space-purple/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-40 bg-gradient-to-br from-space-purple/20 to-space-blue-light/5 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu className="w-16 h-16 text-space-purple-light opacity-70" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-orbitron text-lg mb-2">Satellite Lab</h3>
                      <p className="text-gray-300 text-sm">
                        Design, build and test mini-satellites with professional-grade equipment and software
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-space-blue-light/10 border-space-purple/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-40 bg-gradient-to-br from-space-purple/20 to-space-blue-light/5 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Telescope className="w-16 h-16 text-space-purple-light opacity-70" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-orbitron text-lg mb-2">Astronomy Center</h3>
                      <p className="text-gray-300 text-sm">
                        Observe cosmic wonders with high-powered telescopes and astronomy software
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-space-blue-light/10 border-space-purple/10 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="h-40 bg-gradient-to-br from-space-purple/20 to-space-blue-light/5 relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Rocket className="w-16 h-16 text-space-purple-light opacity-70" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-orbitron text-lg mb-2">Mission Control</h3>
                      <p className="text-gray-300 text-sm">
                        Simulate space missions in a replica control room environment with real-time data
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto bg-gradient-to-br from-space-purple/20 to-space-blue-light/5 rounded-2xl border border-space-purple/20 p-8 md:p-12 text-center relative overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 bg-space-purple/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-space-neon/5 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-space-purple/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-space-purple-light" />
                </div>
                
                <h2 className="text-3xl font-orbitron mb-4">Ready to Transform Your School?</h2>
                <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                  Join the elite network of schools offering next-generation space education. 
                  Contact us to discuss how we can customize our program for your institution.
                </p>
                
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3 bg-space-purple hover:bg-space-purple-dark text-white font-medium rounded-lg transition-colors duration-300">
                  Schedule a Consultation
                  <Rocket className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Labs;
