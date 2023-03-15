import React, { ButtonHTMLAttributes } from 'react';
import "./Button.css"
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  ...rest
}) => {
  const buttonClasses = `button button--${variant}`;

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
