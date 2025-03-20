
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
            <div className="flex space-x-4">
              <a href="#" className="w-8 h-8 rounded-full bg-space-blue flex items-center justify-center border border-space-purple/30 hover:border-space-purple transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-space-blue flex items-center justify-center border border-space-purple/30 hover:border-space-purple transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-orbitron text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Mission Control</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Courses</Link></li>
              <li><Link to="/global-exposure" className="text-gray-400 hover:text-white transition-colors">Global Exposure</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="font-orbitron text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/labs" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-white transition-colors">Command Crew</Link></li>
              <li><Link to="/astronomy" className="text-gray-400 hover:text-white transition-colors">Astronomy</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Launchpad</Link></li>
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
