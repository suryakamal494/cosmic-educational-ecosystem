
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, MapPin, Phone, Mail, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Contact = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-orbitron mb-4">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Launchpad
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Ready to ignite curiosity and launch your school's space program? Connect with our team to explore collaboration opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Contact Form */}
              <div className="space-card p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-space-purple/10 rounded-full blur-xl"></div>
                
                <h2 className="text-xl font-orbitron mb-6">Mission Control Communication</h2>
                
                <form className="space-y-4 z-10">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium block">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        className="w-full bg-space-blue-light/30 border border-space-purple/20 rounded-md px-4 py-2 focus:border-space-purple focus:outline-none focus:ring-1 focus:ring-space-purple"
                        placeholder="Your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium block">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        className="w-full bg-space-blue-light/30 border border-space-purple/20 rounded-md px-4 py-2 focus:border-space-purple focus:outline-none focus:ring-1 focus:ring-space-purple"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="organization" className="text-sm font-medium block">Organization</label>
                    <input 
                      type="text" 
                      id="organization"
                      className="w-full bg-space-blue-light/30 border border-space-purple/20 rounded-md px-4 py-2 focus:border-space-purple focus:outline-none focus:ring-1 focus:ring-space-purple"
                      placeholder="School/Institute name"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium block">Subject</label>
                    <select 
                      id="subject"
                      className="w-full bg-space-blue-light/30 border border-space-purple/20 rounded-md px-4 py-2 focus:border-space-purple focus:outline-none focus:ring-1 focus:ring-space-purple"
                    >
                      <option value="">Select an option</option>
                      <option value="partnership">School Partnership</option>
                      <option value="program">Program Information</option>
                      <option value="visit">Arrange a Visit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium block">Message</label>
                    <textarea 
                      id="message"
                      rows={4}
                      className="w-full bg-space-blue-light/30 border border-space-purple/20 rounded-md px-4 py-2 focus:border-space-purple focus:outline-none focus:ring-1 focus:ring-space-purple resize-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-space-purple hover:bg-space-purple-dark text-white font-medium py-2 rounded-md transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Launch Message</span>
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="flex flex-col gap-6">
                <div className="space-card p-6 h-full flex flex-col">
                  <h2 className="text-xl font-orbitron mb-6">Space Station Coordinates</h2>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-space-purple" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-1">Headquarters</h3>
                        <p className="text-gray-300 text-sm">L&T Serene County, Gachibowli, Telangana 500032</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-space-purple" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-1">Direct Line</h3>
                        <p className="text-gray-300 text-sm">+91 9701891039</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-space-purple" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold mb-1">Mission Control</h3>
                        <p className="text-gray-300 text-sm">info@aspirehub.co.in</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-card p-6 relative overflow-hidden">
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-space-neon/10 rounded-full blur-xl"></div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-space-neon/20 flex items-center justify-center flex-shrink-0">
                      <Rocket className="w-5 h-5 text-space-neon" />
                    </div>
                    <h3 className="text-lg font-orbitron">Ready for Launch?</h3>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">
                    Schedule a virtual tour of our programs or request an in-person visit to experience our space education offerings firsthand.
                  </p>
                  
                  <Button className="w-full bg-space-neon hover:bg-space-neon/80 text-space-blue font-medium rounded-md transition-all duration-300">
                    Schedule a Demo
                  </Button>
                </div>
              </div>
            </div>
            
            <div className="space-card p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3')] opacity-20 blur-sm"></div>
              
              <div className="relative z-10">
                <h2 className="text-xl font-orbitron text-center mb-6">Our Galactic Network</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg p-4 text-center">
                    <h3 className="font-orbitron text-sm mb-2">North America</h3>
                    <p className="text-gray-300 text-xs">University of the Virgin Islands</p>
                  </div>
                  
                  <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg p-4 text-center">
                    <h3 className="font-orbitron text-sm mb-2">Europe</h3>
                    <p className="text-gray-300 text-xs">Taltech University, Estonia</p>
                  </div>
                  
                  <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg p-4 text-center">
                    <h3 className="font-orbitron text-sm mb-2">Asia</h3>
                    <p className="text-gray-300 text-xs">iSPACE Headquarters, India</p>
                  </div>
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

export default Contact;
