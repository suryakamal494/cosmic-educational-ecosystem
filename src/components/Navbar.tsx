
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Courses', path: '/programs' },
  { label: 'Global Exposure', path: '/global-exposure' },
  { label: 'Activities', path: '/labs' },
  { 
    label: 'Partnerships', 
    path: '#',
    dropdown: true,
    children: [
      { label: 'Maxme', path: '/partnerships/maxme' },
      { label: 'Taramandal', path: '/partnerships/taramandal' }
    ]
  },
  { label: 'Command Crew', path: '/team' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isMobile = useIsMobile();

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

  const handleDropdownToggle = (label: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation(); // Prevent bubbling
    }
    
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      if (!isMobile) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobile]);

  // Check if current path is in a dropdown's children
  const isChildActive = (item: any) => {
    if (!item.dropdown) return false;
    return item.children?.some((child: any) => child.path === location.pathname);
  };

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
            <span className="font-orbitron text-lg font-bold tracking-wider bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
              iSPACE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-center flex-1 px-4">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label} className="relative" onClick={(e) => item.dropdown && e.stopPropagation()}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={(e) => handleDropdownToggle(item.label, e)}
                        className={`flex items-center py-2 px-1 font-medium text-sm transition-colors ${
                          isChildActive(item) ? "text-white" : "text-gray-300 hover:text-white"
                        }`}
                      >
                        {item.label}
                        <ChevronDown size={14} className={`ml-1 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                        {(isChildActive(item) || activeDropdown === item.label) && (
                          <motion.div
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-space-purple"
                            layoutId="navbar-indicator"
                          />
                        )}
                      </button>
                      
                      {/* Desktop Dropdown Menu */}
                      {activeDropdown === item.label && (
                        <div className="absolute left-0 mt-1 py-2 w-40 bg-space-blue-dark border border-space-purple/20 rounded-lg shadow-xl z-50">
                          {item.children?.map((child) => (
                            <Link
                              key={child.label}
                              to={child.path}
                              className="block px-4 py-2 text-sm text-gray-300 hover:bg-space-purple/20 hover:text-white transition-colors"
                              onClick={() => {
                                setIsOpen(false);
                                closeDropdowns();
                              }}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link 
                      to={item.path}
                      className={`relative py-2 px-1 font-medium text-sm transition-colors ${
                        location.pathname === item.path 
                          ? "text-white" 
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.label}
                      {location.pathname === item.path && (
                        <motion.div 
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-space-purple"
                          layoutId="navbar-indicator"
                        />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Button
              asChild
              className="space-button font-orbitron text-xs tracking-wider px-6 py-2 group"
            >
              <Link to="/contact">
                <span>Contact Us</span>
              </Link>
            </Button>
          </div>

          {/* Mobile Navigation Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden text-white hover:bg-space-purple/20"
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
        className="fixed inset-0 bg-space-blue/95 backdrop-blur-lg z-40 lg:hidden"
        style={{ 
          position: 'fixed',
          top: 0,
          height: '100vh',
          overflowY: 'auto' 
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6 p-8 py-20">
          {navItems.map((item) => (
            <div key={item.label} className="w-full">
              {item.dropdown ? (
                <div className="w-full">
                  <button
                    onClick={(e) => handleDropdownToggle(item.label, e)}
                    className="w-full flex items-center justify-center text-lg font-orbitron mb-2"
                  >
                    {item.label}
                    <ChevronDown size={16} className={`ml-1 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Mobile Dropdown */}
                  {activeDropdown === item.label && (
                    <div className="flex flex-col items-center space-y-3 mt-3 mb-2 bg-space-blue-light/30 py-3 px-4 rounded-lg">
                      {item.children?.map((child) => (
                        <Link
                          key={child.label}
                          to={child.path}
                          className="text-sm font-medium text-gray-300 hover:text-space-purple-light py-1"
                          onClick={() => {
                            setIsOpen(false);
                            closeDropdowns();
                          }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
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
              )}
            </div>
          ))}
          <Link
            to="/contact"
            className="mt-4 px-6 py-2 bg-space-purple rounded-lg text-white font-orbitron"
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
