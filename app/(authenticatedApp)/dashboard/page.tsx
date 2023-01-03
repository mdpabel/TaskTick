import Activities from '@components/Activities';
import Greeting from '@components/Greeting';
import OngoingTasks from '@components/OngoingTasks';
import React, { Suspense } from 'react';

const Dashboard = () => {
  return (
    <div className='flex flex-col space-x-8 sm:flex-row'>
      <div className='w-full sm:w-2/3'>
        <Greeting />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Activities />
        </Suspense>
      </div>

      <div className='w-full sm:w-1/3'>
        <OngoingTasks />
      </div>
    </div>
  );
};

export default Dashboard;
