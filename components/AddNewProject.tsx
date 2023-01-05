'use client';

import React, { SyntheticEvent, useState } from 'react';
import Button from '@components/Button';
import Input, { Label, TextArea } from '@components/Input';
import { InputWrapper } from '@components/Input';
import Title from '@components/Title';
import { client } from '@utils/apiClient';
import { useAsync } from './../hooks/useAsync';
import Spinner from './Spinner';
import { useRouter } from 'next/navigation';

const initialState = {
  name: '',
  description: '',
};

const AddNewProject = () => {
  const { run, data, isLoading, isSuccess, setValue } = useAsync();
  const [project, setProject] = useState({ ...initialState });
  const router = useRouter();

  const addNewProject = async (e: SyntheticEvent) => {
    e.preventDefault();
    const res = client('/api/project', {
      method: 'POST',
      data: project,
    });
    run(res);
    router.refresh();
    setValue(data);
    setProject({ ...initialState });
  };

  return (
    <form onSubmit={addNewProject} className='space-y-4'>
      <Title>Add New Project</Title>
      <InputWrapper>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          focus={true}
          placeholder='Project title'
          onChange={(val) =>
            setProject({
              ...project,
              name: val,
            })
          }
          value={project.name}
          required={true}
          type='string'
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor='description'>Description</Label>
        <TextArea
          value={project.description}
          onChange={(val) =>
            setProject({
              ...project,
              description: val,
            })
          }
          placeholder='This is a description'
          id='description'
        />
      </InputWrapper>

      <Button type='submit'>
        + Create project {isLoading ? <Spinner /> : null}
      </Button>
    </form>
  );
};

export default AddNewProject;
