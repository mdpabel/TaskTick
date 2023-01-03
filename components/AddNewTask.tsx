'use client';

import React, { useEffect, useState } from 'react';
import Button from '@components/Button';
import Input, { Label, TextArea } from '@components/Input';
import { InputWrapper } from '@components/Input';
import Title from '@components/Title';
import { client } from '@utils/apiClient';
import { useAsync } from './../hooks/useAsync';
import { Prisma } from '@prisma/client';

const project = Prisma.validator<Prisma.ProjectArgs>()({});

type ProjectType = {
  data: Prisma.ProjectGetPayload<typeof project>[];
};

const AddNewTask = () => {
  // const { run, isLoading, isSuccess, isError, data, error } =
  //   useAsync<ProjectType>();

  // useEffect(() => {
  //   const res = client('/api/project', {});
  //   run(() => res);
  // }, [run]);

  // const projects = data?.data;

  return (
    <form className='space-y-4'>
      <Title>Add New Task</Title>
      <InputWrapper>
        <Label htmlFor='title'>Title</Label>
        <Input
          id='title'
          focus={true}
          placeholder='First Name'
          onChange={(val) => console.log()}
          value=''
          required={true}
          type='string'
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor='description'>Description</Label>
        <TextArea
          onChange={(val) => console.log()}
          placeholder='This is a description'
          id='description'
        />
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor='StartTime'>Start Time</Label>
        <div className='flex space-x-4'>
          <Input type='date' id='StartTime' onChange={(val) => console.log()} />
          <Input
            type='time'
            placeholder='00:00'
            id='StartTime'
            onChange={(val) => console.log(val)}
          />
        </div>
      </InputWrapper>

      <InputWrapper>
        <Label htmlFor='ends'>Ends</Label>
        <div className='flex space-x-4'>
          <Input type='date' id='ends' onChange={(val) => console.log()} />
          <Input
            type='time'
            placeholder='00:00'
            id='ends'
            onChange={(val) => console.log(val)}
          />
        </div>
      </InputWrapper>

      {/* <InputWrapper>
        <Label htmlFor='project'>Select project</Label>
        {isLoading ? (
          'Loading....'
        ) : (
          <select
            id='project'
            className='w-full px-4 py-1 border-2 border-solid rounded outline-none text-md border-gray focus:border-gray-300'
          >
            <option value='select'>Choose a project</option>
            {projects &&
              projects?.map((project) => {
                return (
                  <option key={project.id} value={project.id}>
                    {project.name}
                  </option>
                );
              })}
          </select>
        )}
      </InputWrapper> */}

      <Button type='submit'>+ Create new Task</Button>
    </form>
  );
};

export default AddNewTask;
