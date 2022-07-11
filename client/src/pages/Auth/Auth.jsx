import React from 'react';
import { TextField, Button } from '@material-ui/core';
import { useForm } from "react-hook-form";
import axios from 'axios';
import '../../styles/auth.css'

function Auth() {
    const { register, handleSubmit } = useForm();
    const onSubmit = function (data) {
        axios.post('', data)
    }
    return (
        <form className="auth-form-wrapper" onSubmit={handleSubmit(onSubmit)}>
            <div>Login or create an account</div>
            <TextField type='email' size='medium' variant='outlined' label="Email" {...register('email')} />
            <TextField type='password' label='Password' size='medium' variant='outlined' {...register('password')} />
            <Button type='submit' size='large' variant='outlined'>Submit</Button>
        </form>
    )
}

export default Auth;