'use client';
import React, { useEffect } from 'react';
import { logout } from './../utils/authProvider';
import { useAsync } from './../hooks/useAsync';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Spinner from './Spinner';
import ArrowRight from './icons/ArrowRight';

const Logout = () => {
  const router = useRouter();
  const { run, data, isSuccess, error, isLoading } = useAsync();
  const handleClick = async () => {
    run(logout());
  };

  useEffect(() => {
    if (isSuccess) {
      router.replace('/login');
    }
  }, [isSuccess, router]);

  return (
    <Button type='button' intent='logout' onClick={handleClick}>
      Logout {isLoading ? <Spinner /> : <ArrowRight />}
    </Button>
  );
};

export default Logout;
