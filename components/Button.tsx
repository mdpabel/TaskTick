import React, { FC, HTMLAttributes } from 'react';
import { VariantProps, cva } from 'class-variance-authority';

const buttonStyles = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'shadow',
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
}

const Button: FC<ButtonProps> = ({ children, intent, size, type }) => {
  return (
    <button type={type} className={buttonStyles({ intent, size })}>
      {children}
    </button>
  );
};

export default Button;
