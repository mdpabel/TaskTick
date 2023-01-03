'use client';
import React from 'react';
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { CardWrapper } from './Card';
import Task from './Task';

const data = [
  { name: 'Completed', value: 10 },
  { name: 'Due', value: 4 },
];

const COLORS = ['#0088FE', '#00C49F'];

const task = {
  title: 'Call with Someone',
  deadline: 'Jan 20, 2022',
};

const Project = () => {
  return (
    <div className='w-full min-w-[300px] h-screen bg-white border sm:w-1/4'>
      <h2 className='pt-4 text-center bg-gray-200'>Freelancing</h2>
      <div className='flex flex-col items-center '>
        <ResponsiveContainer
          width='40%'
          height='20%'
          minWidth={170}
          minHeight={170}
        >
          <PieChart width={170} height={170}>
            <Pie data={data} dataKey='value' nameKey='name' cx='50%' cy='50%'>
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <p className='w-full p-1 text-center text-gray-700 border'>
          <span className='font-bold text-orange-500'>10</span>/14 completed
        </p>
      </div>

      <ul className='flex flex-col px-4 pt-8 space-y-4'>
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
        <Task task={task} />
      </ul>
    </div>
  );
};

export default Project;
