
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Rocket, Microscope, Cpu, Globe, Zap, Star, Users, BrainCircuit, FlaskConical, Atom, Check, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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

const Activities = () => {
  const offerings = [
    {
      icon: <Star className="h-6 w-6" />,
      title: "DIY Space Projects",
      description: "Hands-on learning through buildable models, experiments, and simulations that bring space science to life."
    },
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Space Hackathons",
      description: "Intensive problem-solving competitions focused on space challenges that develop teamwork and critical thinking skills."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert Speaker Series",
      description: "Regular sessions with space scientists, astronauts, and industry leaders providing real-world insights."
    },
    {
      icon: <Atom className="h-6 w-6" />,
      title: "Science Exhibition",
      description: "Showcase of student projects and innovations that celebrates achievement and builds confidence."
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Space on Wheels",
      description: "Mobile space learning experience bringing astronomy and space science to your school and community."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Creative Problem Solving",
      description: "Workshops teaching innovative approaches to complex space-related challenges."
    }
  ];

  const facilities = [
    {
      icon: <Cpu />,
      title: "Satellite Lab",
      description: "Design and test mini-satellites with professional-grade equipment"
    },
    {
      icon: <Microscope />,
      title: "Astronomy Center",
      description: "Observe cosmic wonders with high-powered telescopes"
    },
    {
      icon: <FlaskConical />,
      title: "Mission Simulator",
      description: "Experience space missions in a realistic simulation environment"
    }
  ];

  return (
    <div className="min-h-screen bg-space-blue text-white overflow-x-hidden">
      <StarryBackground />
      <Navbar />
      
      <main className="pt-28 pb-20 relative z-10">
        {/* Hero Section with Intro Text */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-space-purple/10 mb-6">
              <Atom className="h-8 w-8 text-space-purple-light" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-orbitron mb-6">
              <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                Activities
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              At iSpace, we provide a diverse array of innovative, space-focused programs designed to inspire and educate. Our offerings empower institutions to select the activities that best align with their goals, delivering customized solutions that integrate seamlessly into their academic framework.
            </p>
          </motion.div>
        </section>
        
        {/* Main Activities Grid */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-orbitron mb-4">Our Space Activities</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of activities designed to engage and inspire future space pioneers
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
        </section>
        
        {/* Advanced Facilities */}
        <section className="container mx-auto px-4 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-6xl mx-auto bg-space-blue-light/5 border border-space-purple/20 rounded-2xl overflow-hidden p-8 md:p-10"
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl font-orbitron mb-4">Advanced Facilities</h2>
              <p className="text-gray-300 max-w-3xl mx-auto">
                State-of-the-art equipment and technology that brings space science to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-space-blue-light/10 border border-space-purple/10 rounded-xl p-6 text-center">
                  <div className="w-16 h-16 mx-auto bg-space-purple/10 rounded-full flex items-center justify-center mb-4">
                    {facility.icon}
                  </div>
                  <h3 className="font-orbitron text-lg mb-2">{facility.title}</h3>
                  <p className="text-gray-300 text-sm">{facility.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </section>
        
        {/* CTA Section */}
        <section className="container mx-auto px-4">
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
              
              <Button 
                asChild
                className="bg-space-purple hover:bg-space-purple-dark text-white font-medium rounded-lg transition-colors duration-300"
              >
                <Link to="/contact" className="inline-flex items-center justify-center px-6 py-3">
                  Get in Touch
                  <Rocket className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Activities;
