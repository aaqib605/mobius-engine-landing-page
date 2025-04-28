import React from "react";
import logo from "../assets/logo.png";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-8 w-auto" }) => (
  <a href="/" aria-label="MobuisEngine home">
    <img src={logo} alt="MobuisEngine Logo" className={className} />
  </a>
);

export default Logo;
