import React from 'react';

interface CyRocLogoProps {
  className?: string;
}

const CyRocLogo: React.FC<CyRocLogoProps> = ({ className = "" }) => {
  return (
    <a
      href="/"
      className={`flex items-center group transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="CyRoc Cybersecurity - Home"
      style={{ alignItems: 'center' }}
    >
      {/* Eagle logo from public/ */}
      <div className="flex items-center justify-center" style={{ width: 56, height: 56 }}>
        <img
          src="/Final Logo.png"
          alt="CyRoc Eagle Logo"
          className="h-14 w-14 object-contain"
          style={{ display: 'block' }}
        />
      </div>

      {/* Spacing roughly the width of the beak */}
      <div style={{ width: 28 }} />

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