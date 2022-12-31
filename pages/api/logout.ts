import { serialize } from 'cookie';
import { NextApiRequest, NextApiResponse } from 'next';
import nc from 'next-connect';

const handler = nc<NextApiRequest, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found!');
  },
}).post(async (req, res) => {
  const token = req.cookies[process.env.COOKIES_NAME] as string;

  console.log(token);

  res.setHeader(
    'Set-Cookie',
    serialize(process.env.COOKIES_NAME, token, {
      httpOnly: true,
      path: '/',
      maxAge: -1,
    })
  );

  res.status(200).json({});
});

export default handler;
