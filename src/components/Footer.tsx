
import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-blue-light relative overflow-hidden">
      {/* Starry background for footer */}
      <div className="absolute inset-0">
        <div className="absolute top-5 left-1/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" />
        <div className="absolute top-10 left-3/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{ animationDelay: '1s' }} />
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-white rounded-full animate-star-twinkle" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-10 left-1/5 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-15 right-1/4 w-1 h-1 bg-white rounded-full animate-star-twinkle" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <Rocket size={24} className="text-space-purple rotate-45" />
              <span className="font-orbitron text-xl font-bold tracking-wider">
                iSPACE
              </span>
            </Link>
            <p className="text-gray-400 mb-6">
              Igniting Young Minds, Launching Future Space Leaders
            </p>
            {/* Social links removed as requested */}
          </div>
          
          <div className="col-span-1">
            <h3 className="font-orbitron text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/global-exposure" className="text-gray-400 hover:text-white transition-colors">Global Exposure</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-orbitron text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/labs" className="text-gray-400 hover:text-white transition-colors">Activities</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Command Crew</Link></li>
              <li><Link to="/astronomy" className="text-gray-400 hover:text-white transition-colors">Astronomy Course</Link></li>
              {/* Launchpad quicklink removed as requested */}
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-orbitron text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-space-purple mt-0.5" />
                <span className="text-gray-400">L&T Serene County, Gachibowli, Telangana 500032</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-space-purple" />
                <span className="text-gray-400">9701891039</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-space-purple" />
                <span className="text-gray-400">info@aspirehub.co.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-space-purple/20 mt-12 pt-6 text-center text-gray-500">
          <p>© 2025 Aspirehub Edutech Solutions LLP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
