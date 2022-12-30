'use client';

import React from 'react';
import { useFocus } from './../hooks/useFocus';

interface InputProps {
  placeholder: string;
  onChange: (val: string) => void;
  value?: string;
  validation?: object;
  required?: boolean;
  type: string;
  focus?: boolean;
}

const Input = ({
  placeholder,
  onChange,
  value = '',
  type,
  focus,
}: InputProps) => {
  const inputRef = useFocus();

  const restProps = focus ? { ref: inputRef } : {};

  return (
    <input
      className='w-full px-4 py-1 border-2 border-solid rounded outline-none text-md border-gray focus:border-gray-300'
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required
      {...restProps}
    />
  );
};

export default Input;
