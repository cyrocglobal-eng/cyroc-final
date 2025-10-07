import React from 'react';

interface CyRocLogoProps {
  className?: string;
}

const CyRocLogo: React.FC<CyRocLogoProps> = ({ className = "" }) => {
  return (
    <a
      href="/"
      className={`flex items-center space-x-7 group transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="CyRoc Cybersecurity - Home"
    >
      {/* Eagle logo from public/ (use url-safe filename) */}
      <img
        src="/final-logo.png"
        alt="CyRoc Eagle Logo"
        className="h-12 w-12 object-contain"
      />

      {/* Company Name - white, uppercase, generous spacing */}
      <div className="text-left">
        <span className="font-space-grotesk font-bold text-3xl leading-none text-white tracking-wider" style={{ letterSpacing: '2px' }}>
          CYROC
        </span>
      </div>
    </a>
  );
};

export default CyRocLogo;