import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AutchContext'
import { useNavigate } from 'react-router-dom'
export const LoginPage = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const { singin, errors: signinErrors, isAuth } = useAuth()
    const navegate = useNavigate()

    const onSubmit = handleSubmit((data) => {
        singin(data)
    })

    useEffect(() => {
        if (isAuth) navegate('/dashboard')
    }, [isAuth])

    return (
        <div className='login-page'>
            <h1>Login</h1>
            <div className='login'>
                {
                    signinErrors.map((error, i) => (
                        <div className='register-error' key={i}><p>{error}</p></div>
                    ))
                }
                <form onSubmit={onSubmit} className='login-form' >
                    <input type="email" {...register('email', { required: true })} placeholder='Email' />
                    {errors.email && <p>Email is required</p>}
                    <input type="password" {...register('password', { required: true })} placeholder='Password' />
                    {errors.password && <p>Password is required</p>}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}