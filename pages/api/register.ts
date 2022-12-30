import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';
import prisma from '@db/postgresql';
import { serialize } from 'cookie';
import { hashPassword } from '@utils/password';
import { createToken } from '@utils/jwtToken';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found!');
  },
}).post(async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const hashedPassword = await hashPassword(password);

    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
        password: hashedPassword,
      },
    });

    const token = createToken({ id: newUser.id, email: newUser.email });

    res.setHeader(
      'Set-Cookie',
      serialize(process.env.COOKIES_NAME, token, {
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24 * 7,
      })
    );

    res.status(201).json({
      data: 'Registered Successfully',
      user: newUser,
    });
  } catch (error) {
    res.status(402).json({
      data: 'Registration Failed',
    });
  }
});

export default handler;
