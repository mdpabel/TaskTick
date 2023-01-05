import nc from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@db/postgresql';
import { verifyToken } from '@utils/jwtToken';
import { auth } from '@middlewares/auth';
import { ReqType } from 'types/reqType';

const handler = nc<ReqType, NextApiResponse>({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page is not found!');
  },
})
  .use(auth)
  .get(async (req, res) => {
    const user = req.user;

    const projects = await prisma.project.findMany({
      where: {
        ownerId: user.id,
      },
    });

    res.status(200).json({
      data: projects,
    });
  })
  .post(async (req, res) => {
    try {
      const user = req.user;
      const newProject = await prisma.project.create({
        data: {
          name: req.body.name,
          description: req.body.description,
          ownerId: user.id,
        },
      });

      res.status(201).json({
        data: newProject,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        data: 'Something went wrong',
      });
    }
  });

export default handler;
