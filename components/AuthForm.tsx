'use client';

import React, { SyntheticEvent, useEffect, useState } from 'react';
import { CardBody, CardHeader, CardWrapper } from './Card';
import Input from './Input';
import Button from './Button';
import Link from 'next/link';
import { register, signIn } from '@utils/authProvider';
import { useAsync } from './../hooks/useAsync';
import Alert from './Alert';
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';
import { UserType } from 'types/userType';

const registerContent = {
  linkUrl: '/login',
  label: 'Already have an account?',
  linkText: 'Login',
  header: 'Create a new account',
  subHeader: 'Just a few things to get started',
  buttonText: 'Register',
};

const signInContent = {
  linkUrl: '/register',
  label: "Don't have an account?",
  linkText: 'register',
  header: 'Welcome back',
  subHeader: 'Enter your credentials to access your account',
  buttonText: 'Sign In',
};

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

type modeType = 'register' | 'signin';

const AuthForm = ({ mode }: { mode: modeType }) => {
  const { data, error, isLoading, isError, isSuccess, run } =
    useAsync<UserType>();
  const [formState, setFormState] = useState(initialState);
  const router = useRouter();

  const content = mode === 'register' ? registerContent : signInContent;
  const { firstName, lastName, email, password } = formState;

  const handleFormSubmission = async (e: SyntheticEvent) => {
    e.preventDefault();
    if (mode === 'register') {
      run(register({ firstName, lastName, email, password }));
    } else if (mode === 'signin') {
      run(signIn({ email, password }));
    }
  };

  useEffect(() => {
    if (isSuccess) {
      router.replace('/dashboard');
    }
  }, [isSuccess, router]);

  return (
    <CardWrapper>
      <CardHeader>
        <h2 className='mb-2 text-3xl'>{content.header}</h2>
        <p className='text-lg text-black/75'>{content.subHeader}</p>
      </CardHeader>

      {isError && <Alert intent='danger'>{error}</Alert>}
      {isSuccess && <Alert intent='success'>{data}</Alert>}

      <CardBody>
        <form onSubmit={handleFormSubmission} className='space-y-6'>
          {mode === 'register' && (
            <div className='flex space-x-4'>
              <Input
                focus={true}
                placeholder='First Name'
                onChange={(val) =>
                  setFormState({ ...formState, firstName: val })
                }
                value={firstName}
                required={true}
                type='string'
              />

              <Input
                placeholder='Last Name'
                onChange={(val) =>
                  setFormState({ ...formState, lastName: val })
                }
                value={lastName}
                required={true}
                type='string'
              />
            </div>
          )}

          <Input
            focus={mode === 'signin' ? true : false}
            placeholder='test@test.com'
            onChange={(val) => setFormState({ ...formState, email: val })}
            value={email}
            required={true}
            type='email'
          />

          <Input
            placeholder='******'
            onChange={(val) => setFormState({ ...formState, password: val })}
            value={password}
            required={true}
            type='password'
          />
          <div className='flex flex-col items-center justify-between space-y-4 md:space-y-0 md:flex-row'>
            <div>
              <span>
                {content.label}
                <Link
                  className='font-semibold text-blue-600'
                  href={content.linkUrl}
                >
                  {' '}
                  {content.linkText}
                </Link>
              </span>
            </div>
            <Button intent='primary' size='medium' type='submit'>
              {content.buttonText} {isLoading ? <Spinner /> : null}
            </Button>
          </div>
        </form>
      </CardBody>
    </CardWrapper>
  );
};

export default AuthForm;
