import { Prisma } from '@prisma/client';

const project = Prisma.validator<Prisma.ProjectArgs>()({});

export type ProjectsType = Prisma.ProjectGetPayload<typeof project>[];
export type ProjectType = Prisma.ProjectGetPayload<typeof project>;
