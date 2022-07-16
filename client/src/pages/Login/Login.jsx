import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import '../../styles/auth.css';
import Main from '../Application/Main';

function Login() {
  const [verifiedStatus, setVerifiedStatus] = useState('login');
  const { register, handleSubmit } = useForm();
  const onSubmit = function (data) {
    axios.post('http://localhost:4200/api/login', data).then((res) => {
      if (res.data === 'Пользователя с такими данными не существует!') {
        setVerifiedStatus('error');
      } else {
        setVerifiedStatus('access');
        localStorage.setItem('jwt', JSON.stringify(res.data.token));
      }
    });
  };
  if (verifiedStatus === 'login') {
    return (
      <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
        <div>Login</div>
        <TextField
          type="email"
          size="medium"
          variant="outlined"
          label="Email"
          {...register('email')}
        />
        <TextField
          type="password"
          label="Password"
          size="medium"
          variant="outlined"
          {...register('password')}
        />
        <Button type="submit" size="large" variant="outlined">
          Login
        </Button>
      </form>
    );
  } if (verifiedStatus === 'access') {
    return <Main />;
  }
}

export default Login;
