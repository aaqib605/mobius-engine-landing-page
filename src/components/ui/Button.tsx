import React from "react";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = "" }) => {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center px-6 py-3 bg-white text-[#022183] font-medium rounded-full hover:bg-gray-100 transition ${className}`}
    >
      {children}
    </a>
  );
};

export default Button;
