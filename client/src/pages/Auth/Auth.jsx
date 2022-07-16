/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../styles/auth.css';

function Auth() {
  const [id, setId] = useState(0);
  useEffect(() => {
    axios
      .get('http://localhost:4200/api/getid')
      .then((res) => setId(res.data + 1));
  }, []);
  const { register, handleSubmit } = useForm();
  const onSubmit = function (data) {
    setId(id + 1);
    data.id = id;
    data.role = 'user';
    axios
      .post('http://localhost:4200/api/auth', data)
      .then((res) => {
        localStorage.setItem('jwt', JSON.stringify(res.data));
      });
  };
  return (
    <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
      <div>Create an account</div>
      <TextField
        size="medium"
        variant="outlined"
        label="Name"
        {...register('name', { required: true })}
      />
      <TextField
        size="medium"
        variant="outlined"
        label="Surname"
        {...register('surname', { required: true })}
      />
      <TextField
        type="email"
        size="medium"
        variant="outlined"
        label="Email"
        {...register('email', { required: true })}
      />
      <TextField
        type="password"
        label="Password"
        size="medium"
        variant="outlined"
        {...register('password', { required: true, minLength: 6 })}
      />
      <Button type="submit" size="large" variant="outlined">
        Create
      </Button>
    </form>
  );
}

export default Auth;
