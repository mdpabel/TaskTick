import React from 'react';
import { CardWrapper } from '@components/Card';
import profileBg from '@public/profileBg.jpg';
import Image from 'next/image';

const Greeting = () => {
  return (
    <CardWrapper>
      <div className='flex justify-between'>
        <div className='hidden w-1/2 sm:block '>
          <div className='absolute top-3 left-[20%]  w-1/2 sm:block '>
            <Image width={150} src={profileBg} alt='Profile avatar' />
          </div>
        </div>
        <div className='w-full space-y-3 sm:w-1/2'>
          <h2 className='text-lg'>
            Hi, <span className='font-bold'>MD Pabel</span>
          </h2>
          <p>
            You have <span className='font-bold text-orange-400'>4</span> task
            to finish all task today. You already completed
            <span className='font-bold text-orange-400'> 50%</span> task for
            today.
          </p>
        </div>
      </div>
    </CardWrapper>
  );
};

export default Greeting;
