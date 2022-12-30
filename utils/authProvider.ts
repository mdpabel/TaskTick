import { client } from './apiClient';

interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const register = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterProps) => {
  const data = client('/api/register', {
    data: {
      firstName,
      lastName,
      email,
      password,
    },
    method: 'POST',
  });

  return data;
};

interface SignInProps {
  email: string;
  password: string;
}

export const signIn = async ({ email, password }: SignInProps) => {
  const data = client('/api/signin', {
    data: {
      email,
      password,
    },
    method: 'POST',
  });

  return data;
};
