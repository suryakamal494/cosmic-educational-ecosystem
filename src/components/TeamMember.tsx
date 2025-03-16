
import React from 'react';
import { Linkedin } from 'lucide-react';

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
    <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg overflow-hidden hover:border-space-purple/40 transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-space-purple/20 flex-shrink-0">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity" 
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-orbitron text-lg group-hover:text-space-purple-light transition-colors">{name}</h3>
            <p className="text-space-purple text-sm mb-2">{title}</p>
            <p className="text-gray-300 text-sm mb-3 line-clamp-4">{bio}</p>
            
            <a 
              href={profileLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-space-purple hover:text-space-purple-light transition-colors"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn Profile</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
