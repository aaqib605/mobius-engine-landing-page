import React from "react";

interface LogoProps {
  className?: string;
  logo: string;
}

const Logo: React.FC<LogoProps> = ({ logo, className = "h-8 w-auto" }) => (
  <a href="/" aria-label="MobuisEngine home">
    <img src={logo} alt="MobuisEngine Logo" className={className} />
  </a>
);

export default Logo;
