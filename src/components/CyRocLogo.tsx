import React from 'react';

interface CyRocLogoProps {
  className?: string;
}

const CyRocLogo: React.FC<CyRocLogoProps> = ({ className = "" }) => {
  return (
    <a
      href="/"
      className={`flex items-center space-x-5 group transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="CyRoc Cybersecurity - Home"
    >
      {/* Eagle logo from public/ (use url-safe filename) */}
      <img
        src={`${import.meta.env.BASE_URL}final-logo.png`}
        alt="CyRoc Eagle Logo"
        className="h-16 w-16 object-contain"
      />

      {/* Company Name - white, uppercase, slightly closer spacing */}
      <div className="text-left">
        <span className="font-space-grotesk font-bold text-3xl leading-none text-white tracking-wide" style={{ letterSpacing: '1px' }}>
          CYROC
        </span>
      </div>
    </a>
  );
};

export default CyRocLogo;