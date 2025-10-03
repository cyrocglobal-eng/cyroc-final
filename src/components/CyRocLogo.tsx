import React from 'react';

interface CyRocLogoProps {
  className?: string;
}

const CyRocLogo: React.FC<CyRocLogoProps> = ({ className = "" }) => {
  return (
    <a 
      href="/"
      className={`flex items-center space-x-3.5 group transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="CyRoc Cybersecurity - Home"
    >
      {/* PNG Logo */}
      <div className="relative">
        <img 
          src="/LOGO.png" 
          alt="CyRoc Logo"
          className="h-8 w-8 object-contain group-hover:drop-shadow-[0_0_8px_rgba(255,215,0,0.6)] transition-all duration-300"
        />
        
        {/* Animated Pulse Effect */}
        <div className="absolute inset-0 animate-pulse opacity-30 group-hover:opacity-50 transition-opacity duration-300">
          <div className="h-8 w-8 border border-tactical-yellow/50 rounded-sm"></div>
        </div>
      </div>
      
      {/* Company Name */}
      <div className="text-left">
        <span className="font-space-grotesk font-bold text-3xl leading-none text-soft-white group-hover:text-tactical-yellow transition-colors duration-300" style={{ letterSpacing: '-0.8px' }}>
          CyRoc
        </span>
      </div>
    </a>
  );
};

export default CyRocLogo;