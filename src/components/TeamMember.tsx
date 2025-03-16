
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
  // Function to extract profile image from LinkedIn or use placeholder
  const getProfileImage = () => {
    // For this example, we'll use placeholder since we don't have direct image URLs
    // You would typically use actual image URLs provided by the client
    return imageUrl || '/placeholder.svg';
  };

  return (
    <div className="bg-space-blue-light/30 border border-space-purple/20 rounded-lg overflow-hidden hover:border-space-purple/40 transition-all duration-300 group">
      <div className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-space-purple/20 flex-shrink-0 border-2 border-space-purple/30">
            <img 
              src={getProfileImage()} 
              alt={name} 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" 
            />
          </div>
          
          <div className="flex-1">
            <h3 className="font-orbitron text-base group-hover:text-space-purple-light transition-colors">{name}</h3>
            <p className="text-space-purple text-xs mb-1">{title}</p>
            <p className="text-gray-300 text-xs mb-3 line-clamp-4">{bio}</p>
            
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
