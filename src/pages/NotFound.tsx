
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, ArrowLeft } from "lucide-react";
import StarryBackground from '@/components/StarryBackground';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-space-blue text-white">
      <StarryBackground />
      <Navbar />
      
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="relative z-10 text-center max-w-md mx-auto">
          <div className="inline-flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-space-purple/30 blur-xl animate-pulse-glow" />
              <AlertTriangle className="w-16 h-16 text-space-neon relative z-10" />
            </div>
          </div>
          
          <h1 className="text-6xl font-orbitron font-bold mb-4 text-white">404</h1>
          <p className="text-xl text-gray-300 mb-8">Lost in space? This page doesn't exist in our cosmic coordinates.</p>
          
          <div className="inline-flex">
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 bg-space-purple text-white font-medium rounded-lg hover:bg-space-purple-dark transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Mission Control
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NotFound;
