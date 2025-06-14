import type { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import './style.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  size?: 'small' | 'medium' | 'large';
  icon?: ReactNode
}

const Button: FC<ButtonProps> = ({ 
  children, 
  className = '',
  variant = 'primary',
  size = 'medium',
  icon,
  ...props 
}) => {
  return (
    <button 
      className={`button ${variant} ${size} ${className}`}
      {...props}
    >
      {children}
      {icon}
    </button>
  );
};

export default Button;
