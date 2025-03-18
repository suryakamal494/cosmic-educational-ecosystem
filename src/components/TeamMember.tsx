
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
      className="relative bg-gradient-to-br from-space-blue-light/30 to-space-blue/80 rounded-xl overflow-hidden shadow-xl group"
    >
      {/* Decorative floating particle effects */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-space-purple/5 rounded-full blur-3xl z-0"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-space-neon/5 rounded-full blur-3xl z-0"></div>
      
      <div className="p-6 relative z-10">
        {/* Image container - large vertical format on left side */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8">
          <div className="relative min-w-[160px] h-[220px] overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-space-purple/40 to-transparent opacity-70 z-10 transition-opacity duration-300 group-hover:opacity-50"></div>
            <img 
              src={imageUrl} 
              alt={name} 
              className="absolute inset-0 w-full h-full object-cover object-center" 
            />
            {/* Glowing border effect on hover */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-space-purple/30 rounded-xl transition-all duration-300 z-20"></div>
          </div>
          
          <div className="flex-1">
            <div className="flex flex-col">
              <h3 className="font-orbitron text-2xl text-white mb-1 group-hover:text-space-purple-light transition-colors">{name}</h3>
              <p className="text-space-purple-light font-medium mb-4 inline-flex items-center">
                <span className="w-5 h-[2px] bg-space-purple mr-2"></span>
                {title}
              </p>
              
              <div className="mt-2 prose prose-sm prose-invert max-w-none">
                <p className="text-gray-300 leading-relaxed">{bio}</p>
              </div>
              
              {profileLink && (
                <a 
                  href={profileLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-space-purple hover:text-space-purple-light transition-colors mt-4 group-hover:underline"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>View LinkedIn Profile</span>
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
