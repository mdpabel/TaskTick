'use client';

import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import Title from './Title';

const data = [
  {
    day: 'Sat',
    Completed: 10,
    Due: 5,
  },
  {
    day: 'Sun',
    Completed: 5,
    Due: 6,
  },
  {
    day: 'Mon',
    Completed: 4,
    Due: 11,
  },
  {
    day: 'Tues',
    Completed: 14,
    Due: 5,
  },
  {
    day: 'Wed',
    Completed: 2,
    Due: 15,
  },
  {
    day: 'Thurs',
    Completed: 0,
    Due: 5,
  },
  {
    day: 'Fri',
    Completed: 0,
    Due: 10,
  },
];

const Activities = () => {
  return (
    <div className='flex space-x-4'>
      <div className='w-1/2 h-56'>
        <Title className='ml-12 text-left'>Activities</Title>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={800} height={250} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='day' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='Completed' stackId='a' fill='#8884d8' />
            <Bar dataKey='Due' stackId='a' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className='w-1/2 h-56'>
        <Title className='ml-12 text-left'>Activities</Title>
        <ResponsiveContainer width='100%' height='100%'>
          <BarChart width={800} height={250} data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='day' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='Completed' stackId='a' fill='#8884d8' />
            <Bar dataKey='Due' stackId='a' fill='#82ca9d' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Activities;
