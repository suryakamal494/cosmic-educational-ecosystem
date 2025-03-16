
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
}) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated celestial objects */}
      <div className="absolute w-32 h-32 rounded-full bg-space-purple/20 blur-2xl -top-10 -left-10 animate-float" style={{ animationDelay: '0s' }} />
      <div className="absolute w-40 h-40 rounded-full bg-space-neon/10 blur-3xl top-1/2 -right-20 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute w-24 h-24 rounded-full bg-space-purple-light/10 blur-xl bottom-20 left-20 animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Planetary object */}
      <div className="absolute top-20 right-20 w-40 h-40 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-space-blue-light via-space-purple/30 to-space-blue opacity-60 animate-float hidden md:block">
        <div className="absolute inset-0 rounded-full border border-space-purple/20 backdrop-blur-sm" />
        <div className="absolute top-5 left-5 w-4 h-4 bg-space-neon/50 rounded-full blur-sm" />
        <div className="absolute bottom-10 right-10 w-10 h-10 bg-space-purple/30 rounded-full blur-sm" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Star Icon */}
          <div className="inline-flex mb-6">
            <Star className="text-space-neon animate-star-twinkle w-8 h-8" />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-space-purple-light to-white bg-clip-text text-transparent">
              {title}
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
            {subtitle}
          </p>
          
          <div className="flex justify-center">
            <Button 
              asChild
              className="space-button group"
            >
              <a href={ctaLink} className="flex items-center gap-2">
                {ctaText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space-blue to-transparent" />
    </div>
  );
};

export default HeroSection;
