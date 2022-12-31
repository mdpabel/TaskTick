'use client';
import React, { useEffect } from 'react';
import { logout } from './../utils/authProvider';
import { useAsync } from './../hooks/useAsync';
import { useRouter } from 'next/navigation';
import Button from './Button';
import Spinner from './Spinner';

const Logout = () => {
  const router = useRouter();
  const { run, data, isSuccess, error, isLoading } = useAsync();
  const handleClick = async () => {
    run(() => logout());
  };

  useEffect(() => {
    if (isSuccess) {
      router.replace('/login');
    }
  }, [isSuccess, router]);

  return (
    <Button type='button' intent='primary' onClick={handleClick}>
      Logout {isLoading ? <Spinner /> : null}
    </Button>
  );
};

export default Logout;
