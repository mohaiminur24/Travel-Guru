import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const SignUpLayout = () => {
    return (
        <div className='w-3/6 mx-auto border p-10 my-10 rounded-md'>
            <h1 className='font-bold text-2xl'>Registration</h1>
            <form className='mt-5'>
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="username" id="name" placeholder='Your name' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="username" id="photourl" placeholder='Photo URL' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="username" id="username" placeholder='Username or Email' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="password" name="password" id="password" placeholder='Password' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="password" name="confrimpassword" id="confrimpassword" placeholder='Confrim Password' />
                <input className='mt-3' type="checkbox" name="remember" id="remember"/>
                <label className='ml-2 text-sm' htmlFor="checkbox">Are you agree with our Terms and Conditions</label>
                <input className='block w-full my-4 py-2 bg-yellow-600 rounded-md shadow-md font-bold' type="submit" value="Register" />

                <span className='text-sm text-red-600'></span>

                <p className='font-semibold text-sm'>Already have an Account? <NavLink to="/login"><button className='text-yellow-500'>Login</button></NavLink></p>
            </form>

            <div className='flex gap-5 my-5 justify-center items-center'>
                <hr className='w-full' />
                <span className='w-fit font-bold'>Or</span>
                <hr className='w-full' />
            </div>

            <div>
                <button className='px-10 block w-3/5 mx-auto my-2 border py-2 rounded-2xl font-semibold relative'> <FaFacebook className="absolute text-blue-800 left-2 top-3" /> Continue with Facebook</button>
                <button className='px-10 block w-3/5 mx-auto my-2 border py-2 rounded-2xl font-semibold relative'> <FaGoogle className="absolute text-green-500 left-2 top-3" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUpLayout;