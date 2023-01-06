import React, { FC, HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'flex',
    'items-center',
    'gap-2',
  ],
  {
    variants: {
      intent: {
        primary: [
          'bg-blue-500',
          'text-white',
          'border-transparent',
          'hover:bg-blue-600',
        ],
        secondary: [
          'bg-white',
          'text-gray-800',
          'border-gray-400',
          'hover:bg-gray-100',
        ],
        logout: ['bg-gray-200', 'text-black', 'hover:bg-gray-50'],
      },
      size: {
        small: ['text-sm', 'py-1', 'px-2'],
        medium: ['text-base', 'py-2', 'px-4'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'medium',
    },
  }
);

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, intent, size, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={buttonStyles({ intent, size })}
    >
      {children}
    </button>
  );
};

export default Button;
