
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface ExchangeProgramProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ExchangeProgram: React.FC<ExchangeProgramProps> = ({
  title,
  description,
  imageUrl
}) => {
  return (
    <div className="rounded-lg overflow-hidden bg-space-blue-light/50 border border-space-purple/20 hover:border-space-purple/40 transition-all duration-300 group">
      <div className="aspect-video bg-gradient-to-br from-space-purple/20 to-transparent relative">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-t from-space-blue-light/90 to-transparent"></div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2 group-hover:text-space-purple-light transition-colors">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a href="#" className="inline-flex items-center text-sm text-space-purple group-hover:text-space-purple-light transition-colors">
          Learn more <ArrowUpRight className="ml-1 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

export default ExchangeProgram;
