import React, { ReactNode } from 'react';

type ChildrenProps = {
  children: ReactNode;
};

const CardHeader = ({ children }: ChildrenProps) => {
  return <div className='pb-8 text-center'>{children}</div>;
};

const CardWrapper = ({ children }: ChildrenProps) => {
  return (
    <div className='relative px-10 py-16 m-8 bg-white border rounded shadow'>
      {children}
    </div>
  );
};

const CardBody = ({ children }: ChildrenProps) => {
  return <div>{children}</div>;
};

export { CardWrapper, CardHeader, CardBody };
