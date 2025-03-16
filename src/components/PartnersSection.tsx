
import React from 'react';

const PartnersSection: React.FC = () => {
  // These would be replaced with actual partner logos
  const partners = [
    { id: 1, name: 'University of the Virgin Islands' },
    { id: 2, name: 'Taltech University' },
    { id: 3, name: 'NASA' },
    { id: 4, name: 'ISRO' },
    { id: 5, name: 'Space Agency' },
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Galactic Alliances
        </h2>
        
        <div className="relative">
          {/* Glowing backdrop */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-10 bg-space-purple/20 blur-3xl" />
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner) => (
              <div 
                key={partner.id} 
                className="h-20 w-32 md:w-48 flex items-center justify-center px-4 py-2 bg-space-blue-light/40 border border-space-purple/20 backdrop-blur-sm rounded-lg hover:border-space-purple/50 transition-all duration-300"
              >
                <span className="font-orbitron text-center text-gray-300 text-sm md:text-base">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <p className="text-center text-gray-400 mt-8 max-w-2xl mx-auto">
          Featuring partnerships with top foreign universities and global space agencies to provide unparalleled learning opportunities.
        </p>
      </div>
    </section>
  );
};

export default PartnersSection;
