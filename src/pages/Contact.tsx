
import React from 'react';
import StarryBackground from '@/components/StarryBackground';
import PlanetAnimation from '@/components/PlanetAnimation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Send, Mail, Phone, MapPin, Rocket, Globe, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <PlanetAnimation />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block relative mb-4">
                <Rocket className="text-space-purple w-8 h-8 animate-pulse-glow" />
                <div className="absolute top-0 left-0 w-8 h-8 bg-space-purple/20 rounded-full blur-xl animate-pulse-glow" style={{ animationDelay: '0.5s' }}></div>
              </div>
              
              <h1 className="font-orbitron mb-4 text-4xl">
                <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h1>
              <p className="text-gray-300 max-w-3xl mx-auto">
                Ready for launch? Contact us to embark on your space education journey.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-10 mb-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <div className="space-card h-full flex flex-col justify-between overflow-visible">
                  <div>
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-space-purple/20 text-space-purple text-xs mb-6">
                      <Star className="w-3.5 h-3.5 mr-2" /> Ready for Launch
                    </div>
                    
                    <h2 className="text-2xl font-orbitron mb-4">Get in Touch</h2>
                    <p className="text-gray-300 mb-8">
                      Have questions about our space education programs? Want to bring iSPACE to your school? 
                      Our team is ready to assist you on your journey to the stars.
                    </p>
                    
                    <div className="space-y-6 mb-10">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-5 h-5 text-space-purple" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold mb-1">Email Us</h3>
                          <p className="text-gray-300 text-sm">info@ispace.life</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-5 h-5 text-space-purple" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold mb-1">Call Us</h3>
                          <p className="text-gray-300 text-sm">+91 9701891039</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-space-purple/20 flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-5 h-5 text-space-purple" />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold mb-1">Visit Us</h3>
                          <p className="text-gray-300 text-sm">
                            L&T, Serene County, Telecom Nagar,<br />
                            Gachibowli, Telangana 500032
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-space-purple/20">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="w-10 h-10 bg-space-blue-light rounded-full flex items-center justify-center">
                          <Globe className="w-5 h-5 text-space-purple" />
                        </div>
                        <span className="absolute -right-1 -bottom-1 w-3 h-3 bg-green-500 rounded-full border-2 border-space-blue"></span>
                      </div>
                      <div>
                        <p className="text-xs text-gray-300">Online Status</p>
                        <p className="text-sm">Available for inquiries</p>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">Response time: ~2 hours</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <div className="space-card">
                  <h2 className="text-xl font-orbitron mb-6">Launch Your Journey</h2>
                  
                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm text-gray-300">First Name</label>
                        <Input 
                          id="firstName" 
                          placeholder="John" 
                          className="bg-space-blue-light/50 border-space-purple/20 text-white" 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm text-gray-300">Last Name</label>
                        <Input 
                          id="lastName" 
                          placeholder="Doe" 
                          className="bg-space-blue-light/50 border-space-purple/20 text-white" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-300">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@example.com" 
                        className="bg-space-blue-light/50 border-space-purple/20 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm text-gray-300">Subject</label>
                      <Input 
                        id="subject" 
                        placeholder="I'm interested in..." 
                        className="bg-space-blue-light/50 border-space-purple/20 text-white" 
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm text-gray-300">Message</label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help..." 
                        className="bg-space-blue-light/50 border-space-purple/20 text-white min-h-[120px]" 
                      />
                    </div>
                    
                    <div className="pt-4">
                      <Button className="w-full bg-space-purple hover:bg-space-purple-dark text-white">
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
