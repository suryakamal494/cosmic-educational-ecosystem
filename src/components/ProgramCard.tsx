
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  linkUrl: string;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  icon,
  linkUrl,
}) => {
  return (
    <div className="space-card group">
      <div className="absolute top-0 right-0 w-20 h-20 bg-glow-gradient opacity-30 rounded-full blur-xl" />
      
      <div className="flex flex-col h-full">
        <div className="mb-4 text-space-purple">{icon}</div>
        
        <h3 className="text-xl font-orbitron font-semibold mb-3 text-white group-hover:text-space-purple-light transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-300 mb-6 flex-grow">
          {description}
        </p>
        
        <Link
          to={linkUrl}
          className="inline-flex items-center gap-2 text-space-purple hover:text-space-purple-light transition-colors font-semibold mt-auto"
        >
          Learn more
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </div>
  );
};

export default ProgramCard;
