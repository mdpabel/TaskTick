import React from 'react';
import TaskIcon from './icons/TaskIcon';

interface TaskType {
  title: string;
  deadline?: string;
}

const Task = ({ task }: { task: TaskType }) => {
  return (
    <li className='flex items-center space-x-3'>
      <div>
        <TaskIcon />
      </div>
      <div className='text-sm text-gray-800'>
        <h2 className='font-semibold'>{task.title}</h2>
        {task.deadline ? <p>Deadline : {task.deadline}</p> : null}
      </div>
    </li>
  );
};

export default Task;
