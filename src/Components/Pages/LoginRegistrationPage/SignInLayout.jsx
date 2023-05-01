import React from 'react';
import { NavLink } from 'react-router-dom';
import SigninSocialmedia from './SigninSocialmedia';


const SignInLayout = () => {
    return (
        <div className='w-3/6 my-10 mx-auto border p-10 rounded-md'>
            <h1 className='font-bold text-2xl'>Login</h1>
            <form className='mt-5'>
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="username" id="username" placeholder='Username or Email' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="password" name="password" id="password" placeholder='Password' />
                <input className='mt-3' type="checkbox" name="remember" id="remember"/>
                <label className='ml-2 text-sm' htmlFor="checkbox">Are you agree with our Terms and Conditions</label>
                <input className='block w-full my-4 py-2 bg-yellow-600 rounded-md shadow-md font-bold' type="submit" value="Login" />

                <span className='text-sm text-red-600'></span>

                <p className='font-semibold text-sm'>Don't Have an Account? <NavLink to="/login/registration"><button className='text-yellow-500'>Create an Account</button></NavLink></p>
            </form>

            <SigninSocialmedia/>
            
        </div>
    );
};

export default SignInLayout;