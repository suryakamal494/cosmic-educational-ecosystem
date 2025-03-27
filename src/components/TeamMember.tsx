
import React from 'react';
import { Linkedin, Shield, Award, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';

interface TeamMemberProps {
  name: string;
  title: string;
  bio: string;
  profileLink: string;
  imageUrl: string;
  badgeUrl?: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  title,
  bio,
  profileLink,
  imageUrl,
  badgeUrl
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="group"
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-space-blue-light/40 to-space-blue/95 border border-space-purple/20 shadow-xl hover:border-space-purple/40 transition-all duration-300">
        {/* Decorative elements */}
        <div className="absolute -right-20 -top-20 w-40 h-40 bg-space-purple/10 blur-3xl rounded-full"></div>
        <div className="absolute -left-20 -bottom-20 w-40 h-40 bg-space-neon/10 blur-3xl rounded-full"></div>
        
        <div className="relative z-10 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            {/* Profile image */}
            <div className="relative shrink-0">
              <div className="w-36 h-36 md:w-40 md:h-40 rounded-lg overflow-hidden border-2 border-space-purple/30 shadow-lg relative">
                <img 
                  src={imageUrl} 
                  alt={name} 
                  className="w-full h-full object-cover" 
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-space-blue/80 to-transparent opacity-60"></div>
              </div>
              
              {/* Country Flag Badge (if provided) - Changed to square */}
              {badgeUrl ? (
                <div className="absolute -right-2 -bottom-2 bg-space-purple/80 rounded-md p-1 shadow-xl">
                  <div className="h-8 w-8 overflow-hidden">
                    <img src={badgeUrl} alt="Country Flag" className="h-full w-full object-cover" />
                  </div>
                </div>
              ) : (
                <div className="absolute -right-2 -bottom-2 bg-space-purple/80 rounded-full p-2 shadow-xl">
                  <Shield className="w-5 h-5 text-white" />
                </div>
              )}
              
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-space-purple/0 group-hover:bg-space-purple/20 rounded-xl blur-md transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
            </div>
            
            {/* Content */}
            <div className="flex-1">
              <div className="mb-3">
                <h3 className="font-orbitron text-2xl text-white mb-1">{name}</h3>
                <div className="flex items-center text-space-purple-light">
                  <Award className="w-4 h-4 mr-2" />
                  <span className="font-medium text-sm">{title}</span>
                </div>
              </div>
              
              <div className="bg-space-blue-light/20 backdrop-blur-sm rounded-lg p-4 border border-space-purple/20 mb-4">
                <p className="text-gray-300 text-sm leading-relaxed">
                  {bio}
                </p>
              </div>
              
              {profileLink && profileLink !== "#" && (
                <a 
                  href={profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-space-purple/20 hover:bg-space-purple/30 px-4 py-2 rounded-full text-space-purple-light transition-colors text-sm"
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
