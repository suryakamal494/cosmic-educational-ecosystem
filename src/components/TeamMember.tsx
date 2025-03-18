
import React from 'react';
import { Linkedin } from 'lucide-react';
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
      <div className="relative bg-gradient-to-br from-space-blue-light/10 to-space-blue/80 rounded-xl overflow-hidden shadow-xl border border-space-purple/10 hover:border-space-purple/30 transition-all duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-space-purple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="p-6 md:p-8 relative z-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* Image with frame */}
            <div className="relative w-36 h-36 flex-shrink-0">
              <div className="absolute inset-0 rounded-full overflow-hidden border-2 border-space-purple/30 group-hover:border-space-purple/50 transition-colors duration-300">
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover object-center" 
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-space-blue/70"></div>
              </div>
              
              {/* Glow effect on hover */}
              <div className="absolute -inset-0.5 bg-space-purple/0 group-hover:bg-space-purple/20 rounded-full blur-md transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-orbitron text-2xl text-white mb-1">{name}</h3>
              <p className="text-space-purple-light mb-4 inline-flex items-center justify-center md:justify-start">
                <span className="w-10 h-[2px] bg-space-purple mr-2 hidden md:block"></span>
                {title}
              </p>
              
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {bio}
              </p>
              
              {profileLink && profileLink !== "#" && (
                <a 
                  href={profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-space-purple hover:text-space-purple-light transition-colors mt-4 group-hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>View Profile</span>
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
