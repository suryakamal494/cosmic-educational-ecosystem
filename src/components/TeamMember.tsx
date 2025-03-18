
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg overflow-hidden hover:border-space-purple/40 transition-all duration-300 group h-full"
    >
      <div className="p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="w-28 h-28 rounded-full overflow-hidden bg-space-purple/20 flex-shrink-0 border-2 border-space-purple/30">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <h3 className="font-orbitron text-lg group-hover:text-space-purple-light transition-colors">{name}</h3>
            <p className="text-space-purple text-sm mb-3">{title}</p>
            <p className="text-gray-300 text-sm mb-4">{bio}</p>
            
            <a 
              href={profileLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-space-purple hover:text-space-purple-light transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>View Profile</span>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TeamMember;
