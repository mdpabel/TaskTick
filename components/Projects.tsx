import prisma from '@db/postgresql';
import React, { use } from 'react';
import { cookies } from 'next/headers';
import { getUserFromCookies } from '@utils/jwtToken';

const getData = async () => {
  const user = await getUserFromCookies(cookies());
  const projects = await prisma.project.findMany({
    where: {
      ownerId: user?.id,
    },
  });

  return projects;
};

interface ProjectType {
  name: string;
}

const Project = ({ project }: { project: ProjectType }) => {
  return <div>{project.name}</div>;
};

const Projects = async () => {
  const projects = await getData();

  return (
    <div>
      <div className='space-y-4'>
        {projects?.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
