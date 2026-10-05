import React from 'react';

interface RicksLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const RicksLogoIcon: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className = '',
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-105 ${className}`}
      aria-hidden="true"
    >
      <defs>
        {/* Ambient base shadow */}
        <filter id="ricks-glow-effect" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#1a73e8" floodOpacity="0.35" />
        </filter>

        {/* Vertical pillar gradient */}
        <linearGradient id="ricks-spine-grad" x1="10" y1="8" x2="20" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4285f4" />
          <stop offset="50%" stopColor="#1a73e8" />
          <stop offset="100%" stopColor="#0d47a1" />
        </linearGradient>

        {/* Upper loop gradient */}
        <linearGradient id="ricks-loop-grad" x1="16" y1="8" x2="40" y2="28" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="40%" stopColor="#1a73e8" />
          <stop offset="100%" stopColor="#0f4bb8" />
        </linearGradient>

        {/* Dynamic diagonal kick gradient (Growth & High-ROI Green) */}
        <linearGradient id="ricks-kick-grad" x1="22" y1="23" x2="42" y2="41" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#4ade80" />
          <stop offset="50%" stopColor="#10b981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>

        {/* Badge container background gradient */}
        <linearGradient id="ricks-badge-bg" x1="0" y1="0" x2="48" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0b1329" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Rounded squircle emblem */}
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        rx="13"
        fill="url(#ricks-badge-bg)"
        stroke="#1a73e8"
        strokeWidth="1.2"
        strokeOpacity="0.4"
      />

      {/* Inner ambient glow behind the letter R */}
      <circle cx="24" cy="24" r="16" fill="#1a73e8" fillOpacity="0.18" filter="blur(8px)" />

      {/* Stylized 'R' - Left Vertical Pillar */}
      <path
        d="M11 11.5C11 9.567 12.567 8 14.5 8H17C18.933 8 20.5 9.567 20.5 11.5V36.5C20.5 38.433 18.933 40 17 40H14.5C12.567 40 11 38.433 11 36.5V11.5Z"
        fill="url(#ricks-spine-grad)"
      />

      {/* Stylized 'R' - Upper Curved Loop */}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 8H28C34.075 8 39 12.253 39 17.5C39 22.747 34.075 27 28 27H17V8ZM20.5 14H27.5C30.538 14 33 15.567 33 17.5C33 19.433 30.538 21 27.5 21H20.5V14Z"
        fill="url(#ricks-loop-grad)"
      />

      {/* Stylized 'R' - Forward Acceleration Diagonal Kick */}
      <path
        d="M23 23.5C23.8 23.5 24.5 23.9 25 24.6L36.2 38.4C36.9 39.3 36.2 40 35.1 40H29.8C29.1 40 28.5 39.6 28 39L18.8 26.8C18.4 26.2 18.7 25.5 19.4 25.5H23V23.5Z"
        fill="url(#ricks-kick-grad)"
      />

      {/* Local GPS Pinpoint / Search Radar Eye */}
      <circle cx="26.5" cy="17.5" r="2.6" fill="#38bdf8" />
      <circle cx="26.5" cy="17.5" r="1.2" fill="#ffffff" />
    </svg>
  );
};

export const RicksLogo: React.FC<RicksLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 32,
    md: 38,
    lg: 44,
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg sm:text-xl',
    lg: 'text-xl sm:text-2xl',
  };

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group ${className}`}>
      <RicksLogoIcon size={iconSizes[size]} />
      {showText && (
        <div className="flex flex-col">
          <div className={`font-extrabold ${textSizes[size]} tracking-tight text-[#191c20] leading-none`}>
            <span>Ricks</span>{' '}
            <span className="text-[#1a73e8] bg-gradient-to-r from-[#1a73e8] to-[#0052cc] bg-clip-text text-transparent">
              Marketing
            </span>
          </div>
          <span className="text-[9px] sm:text-[10px] text-[#45474e] font-semibold tracking-wide uppercase pt-0.5">
            Google Partner Specialist
          </span>
        </div>
      )}
    </div>
  );
};
