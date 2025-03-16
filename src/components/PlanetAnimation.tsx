
import React from 'react';

const PlanetAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Mars-like planet */}
      <div 
        className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-[#e87461] to-[#943926] opacity-15 blur-sm animate-planet-rotate"
        style={{ 
          top: '15%', 
          right: '-5%',
          boxShadow: '0 0 60px rgba(232, 116, 97, 0.3)',
          animationDuration: '120s'
        }}
      />
      
      {/* Saturn-like planet with rings */}
      <div className="absolute" style={{ bottom: '10%', left: '-10%' }}>
        <div 
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-[#e9d28d] to-[#c9a648] opacity-10 blur-sm animate-float"
          style={{ animationDuration: '80s' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 w-56 h-12 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-transparent via-[#e9d28d]/20 to-transparent rounded-full rotate-12 opacity-30 blur-sm"
        />
      </div>
      
      {/* Small blue planet */}
      <div 
        className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-[#61dafb] to-[#2685bd] opacity-20 blur-sm animate-float"
        style={{ 
          top: '60%', 
          right: '15%',
          animationDuration: '45s',
          animationDelay: '2s'
        }}
      />
      
      {/* Distant galaxy/nebula effect */}
      <div 
        className="absolute w-96 h-72 rounded-full bg-gradient-to-br from-space-purple/5 via-[#ff5eb7]/10 to-transparent opacity-30 blur-3xl"
        style={{ 
          top: '40%', 
          left: '30%',
          transform: 'rotate(-15deg)'
        }}
      />
    </div>
  );
};

export default PlanetAnimation;
