import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base";
  
  const variants = {
    primary: "bg-gold-500 text-dark-900 hover:bg-gold-400 font-semibold shadow-lg shadow-gold-500/20",
    outline: "border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-dark-900",
    ghost: "text-gray-300 hover:text-gold-500"
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;