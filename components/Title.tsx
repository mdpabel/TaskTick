import clsx from 'clsx';
import React, { ReactNode } from 'react';

interface TitleProps {
  children: ReactNode;
  className?: string;
}
const Title = ({ children, className }: TitleProps) => {
  return (
    <h2 className={`py-3 text-xl font-bold  text-gray-700 ` + className}>
      {children}
    </h2>
  );
};

export default Title;
