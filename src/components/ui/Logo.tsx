import React from 'react';

interface LogoProps {
  className?: string;
  invertColor?: boolean;
  showText?: boolean;
}

const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  invertColor = false,
  showText = true
}) => {
  const logoColor = invertColor ? '#FFFFFF' : '#2374A5';
  
  return (
    <div className={`flex items-center ${className}`}>
      {/* SVG Logo */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M10.6667 26.6667H5.33333V21.3333H10.6667V26.6667Z" 
          fill={logoColor}
        />
        <path 
          d="M21.3333 21.3333H16V16H21.3333V21.3333Z" 
          fill={logoColor}
        />
        <path 
          d="M26.6667 5.33333L26.6667 18.6667L13.3334 18.6667L13.3334 5.33333L26.6667 5.33333Z" 
          fill={logoColor}
        />
      </svg>
      
      {/* Logo Text */}
      {showText && (
        <span className={`ml-2 font-semibold ${invertColor ? 'text-white' : 'text-[#2374A5]'}`}>
          GIGFLOWW
        </span>
      )}
    </div>
  );
};

export default Logo;
