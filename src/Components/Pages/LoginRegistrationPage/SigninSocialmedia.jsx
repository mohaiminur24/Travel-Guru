import React from 'react';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

const SigninSocialmedia = () => {
    return (
        <div>
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

export default SigninSocialmedia;