import { ReactNode } from 'react';
import Navbar from './../../components/Navbar';

const UnAuthenticatedAppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <header>
        <Navbar />
      </header>
      <section className='flex items-center justify-center w-full h-full min-h-[600px]'>
        {children}
      </section>
    </main>
  );
};

export default UnAuthenticatedAppLayout;
