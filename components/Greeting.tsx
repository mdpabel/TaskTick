import React from 'react';
import { cookies } from 'next/headers';
import { CardWrapper } from '@components/Card';
import profileBg from '@public/profileBg.jpg';
import Image from 'next/image';
import { getUserFromCookies } from '@utils/jwtToken';

const getData = async () => {
  const user = await getUserFromCookies(cookies());
  if (!user) {
    throw new Error("The user doesn't exist");
  }
  return user;
};

const Greeting = async () => {
  const user = await getData();

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
            Hi,{' '}
            <span className='font-bold'>
              {user.firstName + ' ' + user.lastName}
            </span>
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
