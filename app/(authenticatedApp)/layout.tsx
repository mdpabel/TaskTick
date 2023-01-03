import { ReactNode } from 'react';
import Sidebar from '@components/Sidebar';
import Image from 'next/image';

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className='flex'>
      <Sidebar />

      <div className='container w-11/12 px-6 py-10 m-10 border border-green-800 border-dashed md:w-4/5'>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
