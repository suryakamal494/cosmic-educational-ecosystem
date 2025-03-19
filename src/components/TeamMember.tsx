
import React from 'react';
import { Linkedin, Shield, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  profileLink: string;
  imageUrl: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  profileLink,
  imageUrl
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        {/* Card background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-space-blue-light/20 to-space-blue/90 z-0"></div>
        
        {/* Decorative elements */}
        <div className="absolute -right-10 -top-10 w-40 h-40 bg-space-purple/10 blur-3xl rounded-full"></div>
        <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-space-neon/10 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
            {/* Profile image */}
            <div className="relative">
              <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-space-purple/30 shadow-lg relative">
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-blue/80 to-transparent opacity-60"></div>
              </div>
              
              {/* Decorative badge */}
              <div className="absolute -right-2 -bottom-2 bg-space-purple/80 rounded-full p-2 shadow-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-space-purple/0 group-hover:bg-space-purple/20 rounded-xl blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
            
            {/* Content */}
            <div className="flex-1 lg:text-left text-center">
              <div className="mb-4">
                <h3 className="font-orbitron text-3xl text-white mb-2">{name}</h3>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-space-purple-light">
                  <Award className="w-5 h-5" />
                  <span className="font-medium">{title}</span>
                </div>
              </div>
              
              <div className="bg-space-blue-light/20 backdrop-blur-sm rounded-lg p-4 border border-space-purple/20 mb-4">
                <p className="text-gray-300 leading-relaxed">
                  {bio}
                </p>
              </div>
              
              {profileLink && profileLink !== "#" && (
                <a 
                  href={profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-space-purple/20 hover:bg-space-purple/30 px-4 py-2 rounded-full text-space-purple-light transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
