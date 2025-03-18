
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";

const navItems = [
  { label: 'Mission Control', path: '/' },
  { label: 'Stellar Origins', path: '/about' },
  { label: 'Interstellar Academies', path: '/programs' },
  { label: 'Cosmic Expeditions', path: '/expeditions' },
  { label: 'Astro-Tech Labs', path: '/labs' },
  { label: 'Command Crew', path: '/team' },
  { label: 'Launchpad', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-space-blue/80 backdrop-blur-lg shadow-lg py-2'
          : 'bg-gradient-to-b from-space-blue/90 to-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-[120px] group">
            <div className="relative">
              <div className="p-2 bg-space-purple/20 rounded-full group-hover:bg-space-purple/30 transition-all duration-300">
                <Rocket size={22} className="text-space-purple-light rotate-45" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-space-neon rounded-full animate-pulse-glow" />
            </div>
            <div className="flex flex-col">
              <span className="font-orbitron text-lg font-bold tracking-wider bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
                iSPACE
              </span>
              <span className="text-[10px] text-gray-400 font-medium -mt-1">Young Scientist Initiative</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavigationMenu className="mx-auto">
              <NavigationMenuList className="space-x-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.path}>
                    <Link 
                      to={item.path}
                      className={cn(
                        "group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-space-purple/20 hover:text-white focus:bg-space-purple/20 focus:text-white focus:outline-none",
                        location.pathname === item.path 
                          ? "bg-space-purple/30 text-white" 
                          : "text-gray-300"
                      )}
                    >
                      <span>{item.label}</span>
                      {location.pathname === item.path && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-space-purple"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Contact Button on Desktop */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="ghost"
              className="space-button font-orbitron text-xs tracking-wider px-6 py-2 group"
            >
              <Link to="/contact" className="flex items-center gap-2">
                <Star className="w-3.5 h-3.5 text-space-neon group-hover:text-white transition-colors" />
                <span>Connect</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white hover:bg-space-purple/20"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : '100%'
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-space-blue/95 backdrop-blur-lg z-40 md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-lg font-orbitron ${
                location.pathname === item.path
                  ? 'text-space-purple-light font-semibold'
                  : 'text-gray-300'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
