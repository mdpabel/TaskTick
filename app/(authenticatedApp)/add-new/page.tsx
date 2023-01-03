import { Suspense } from 'react';
import AddNewProject from '@components/AddNewProject';
import AddNewTask from '@components/AddNewTask';
import Projects from '@components/Projects';
import Title from '@components/Title';

const AddNew = () => {
  return (
    <div className='flex space-x-10'>
      <div className='w-1/3 space-y-10'>
        <AddNewProject />
        <div>
          <Title>List of projects</Title>
          <Suspense fallback='Loading...'>
            <Projects />
          </Suspense>
        </div>
      </div>
      <div className='w-1/3'>
        <AddNewTask />
      </div>
    </div>
  );
};

export default AddNew;
