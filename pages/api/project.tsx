import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@db/postgresql';
import { verifyToken } from '@utils/jwtToken';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found!');
  },
}).get(async (req, res) => {
  const token = req.cookies[process.env.COOKIES_NAME];
  if (!token) {
    return res.status(401).json({
      data: 'Unauthorized user',
    });
  }

  const user = verifyToken(token);

  if (!user) {
    return res.status(401).json({
      data: 'Unauthorized user',
    });
  }

  const projects = await prisma.project.findMany();
  res.status(200).json({
    data: projects,
  });
});

export default handler;
