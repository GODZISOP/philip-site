import React from 'react';

interface LogoProps {
  variant?: 'full' | 'mark' | 'wordmark';
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  className = '',
  theme = 'dark',
  size = 'md',
}) => {
  const isLight = theme === 'light';
  const textColor = isLight ? '#0B0D10' : '#F4F5F7';
  const subtextColor = isLight ? '#4B5563' : '#94A3B8';
  const goldColor = '#C5A059';

  // Standalone Vector Progression Icon
  const renderIcon = (scale = 1) => (
    <svg
      viewBox="0 0 100 100"
      className="inline-block flex-shrink-0 transition-transform duration-300 hover:scale-105"
      style={{ width: `${36 * scale}px`, height: `${36 * scale}px` }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="PrimeLaterFit Symbol"
    >
      <defs>
        <linearGradient id={`goldGrad-${theme}-${scale}`} x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9E762E" />
          <stop offset="50%" stopColor="#C5A059" />
          <stop offset="100%" stopColor="#F5E6C4" />
        </linearGradient>
      </defs>

      {/* Structural Anchor Spine */}
      <rect x="18" y="14" width="13" height="72" rx="2" fill={textColor} />

      {/* Forward/Upward Dynamic Vector Loop */}
      <path
        d="M 31 14 L 64 14 C 78 14 87 23 87 36 C 87 48 78 56 65 57 L 80 86 L 63 86 L 49 57 L 31 57 Z"
        fill={`url(#goldGrad-${theme}-${scale})`}
      />

      {/* Architectural Precision Cutout */}
      <path
        d="M 31 26 L 60 26 C 68 26 73 30 73 35.5 C 73 41 68 45 60 45 L 31 45 Z"
        fill={isLight ? '#FFFFFF' : '#0B0D10'}
      />

      {/* Upward Progression Apex Indicator */}
      <polygon points="76,14 90,14 83,23" fill={goldColor} />
    </svg>
  );

  if (variant === 'mark') {
    return (
      <div className={`inline-flex items-center ${className}`}>
        {renderIcon(size === 'sm' ? 0.75 : size === 'lg' ? 1.4 : size === 'xl' ? 2 : 1)}
      </div>
    );
  }

  if (variant === 'wordmark') {
    return (
      <div className={`inline-flex items-baseline tracking-widest font-display font-extrabold uppercase ${className}`}>
        <span style={{ color: textColor }}>PRIME</span>
        <span style={{ color: goldColor }}>LATER</span>
        <span style={{ color: textColor }}>FIT</span>
        <span className="text-[9px] ml-1 font-bold text-gold-500">TM</span>
      </div>
    );
  }

  // Full Horizontal Lockup
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {renderIcon(size === 'sm' ? 0.8 : size === 'lg' ? 1.3 : size === 'xl' ? 1.7 : 1)}
      <div className="flex flex-col justify-center">
        <div className="flex items-baseline font-display font-black tracking-wider leading-none uppercase text-lg sm:text-xl">
          <span style={{ color: textColor }}>PRIME</span>
          <span className="text-gold-500 font-extrabold ml-[1px]">LATER</span>
          <span style={{ color: textColor }} className="ml-[1px]">FIT</span>
          <span className="text-[10px] ml-1 font-bold text-gold-500">TM</span>
        </div>
        <span
          className="text-[8px] sm:text-[9px] tracking-[0.28em] font-medium uppercase mt-0.5"
          style={{ color: subtextColor }}
        >
          Performance & Longevity
        </span>
      </div>
    </div>
  );
};
