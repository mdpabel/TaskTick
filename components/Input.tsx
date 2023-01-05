'use client';

import React, { Children, ReactNode } from 'react';
import { useFocus } from './../hooks/useFocus';

interface InputProps {
  placeholder?: string;
  onChange: (val: string) => void;
  value?: string;
  validation?: object;
  required?: boolean;
  type?: string;
  focus?: boolean;
  id?: string;
}

const Input = ({
  placeholder,
  onChange,
  value = '',
  type = 'text',
  focus,
  id,
}: InputProps) => {
  const inputRef = useFocus();

  const restProps = focus ? { ref: inputRef } : {};

  return (
    <input
      className='w-full px-4 py-1 border-2 border-solid rounded outline-none text-md border-gray focus:border-gray-300'
      type={type}
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      required
      {...restProps}
    />
  );
};

export const InputWrapper = ({ children }: { children: ReactNode }) => {
  return <div className='flex flex-col space-y-2'>{children}</div>;
};

interface LabelType {
  children: ReactNode;
  htmlFor: string;
}

export const Label = ({ children, htmlFor }: LabelType) => {
  return (
    <label className='text-sm font-semibold text-gray-700' htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export const TextArea = ({
  placeholder,
  id,
  value = '',
  onChange,
}: InputProps) => {
  return (
    <textarea
      value={value}
      rows={5}
      onChange={(e) => onChange(e.target.value)}
      className='w-full px-4 py-1 border-2 border-solid rounded outline-none text-md border-gray focus:border-gray-300'
      placeholder={placeholder}
      id={id}
    />
  );
};

export default Input;
