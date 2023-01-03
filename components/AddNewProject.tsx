'use client';

import React from 'react';
import Button from '@components/Button';
import Input, { Label, TextArea } from '@components/Input';
import { InputWrapper } from '@components/Input';
import Title from '@components/Title';

const AddNewProject = () => {
  return (
    <form className='space-y-4'>
      <Title>Add New Project</Title>
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

      <Button type='submit'>+ Create new Project</Button>
    </form>
  );
};

export default AddNewProject;
