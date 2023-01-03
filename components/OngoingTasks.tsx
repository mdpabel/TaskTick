import React from 'react';
import Title from './Title';
import Link from 'next/link';
import Task from './Task';

const task = {
  title: 'Call with Someone',
  deadline: 'Jan 20, 2022',
};

const OngoingTasks = () => {
  return (
    <div>
      <div className='flex items-center space-x-4'>
        <Title>Ongoing Task</Title>
        <Link className='text-orange-400 underline' href='/projects'>
          View All
        </Link>
      </div>
      <ul className='space-y-4'>
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
      </ul>
    </div>
  );
};

export default OngoingTasks;
