import { Suspense } from 'react';
import AddNewProject from '@components/AddNewProject';
import AddNewTask from '@components/AddNewTask';
import Projects from '@components/Projects';
import Title from '@components/Title';

const AddNew = () => {
  return (
    <div className='flex flex-col space-y-10 md:space-x-10 md:flex-row'>
      <div className='w-full space-y-10 md:w-1/3'>
        <AddNewProject />
        <div>
          <Title>List of projects</Title>
          <Suspense fallback='Project Loading...'>
            {/* <Projects />  */}
          </Suspense>
        </div>
      </div>
      <div className='w-full md:w-1/3'>
        <AddNewTask />
      </div>
    </div>
  );
};

export default AddNew;
