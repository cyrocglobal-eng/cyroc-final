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
      {/* Transparent logo from public/ */}
      <img
        src={`${import.meta.env.BASE_URL}final-no-bg-clean-2.png`}
        alt="Cyroc Hawk Logo"
        className="h-16 w-16 object-contain transition-shadow duration-300 ease-out transform-gpu group-hover:drop-shadow-[0_0_18px_rgba(255,215,0,0.65)] group-hover:scale-105 active:scale-95"
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
