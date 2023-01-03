import { sign, verify } from 'jsonwebtoken';
import type { JwtPayload } from 'jsonwebtoken';
import {} from 'cookies';
import prisma from './../db/postgresql';

export const createToken = (payload: JwtPayload) => {
  const token = sign(
    {
      id: payload.id,
      email: payload.email,
    },
    process.env.JWR_SECRETE,
    {
      expiresIn: '7d',
    }
  );
  return token;
};

export const verifyToken = (token: string) => {
  const decode = verify(token, process.env.JWR_SECRETE) as JwtPayload;
  return decode;
};

export const getUserFromCookies = async (cookies: any) => {
  const jwt = cookies.get(process.env.COOKIES_NAME);
  const { id } = verifyToken(jwt.value) as JwtPayload;

  const user = await prisma.user.findUnique({
    where: {
      id: id as string,
    },
  });

  return user;
};
