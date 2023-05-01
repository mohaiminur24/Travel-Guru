import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SigninSocialmedia from './SigninSocialmedia';
import { userContext } from '../../AuthContex/AuthContext';
import toast, { Toaster } from 'react-hot-toast';


const SignInLayout = () => {
    const [errormessage, setError] = useState(null);
    const {handleLogin,handleforgetpassword}= useContext(userContext);
    const loaction = useLocation();
    const fromwhere = loaction.state?.from?.pathname || "/";
    const nevigate = useNavigate();
    const [forgetemail, setForgetemail] = useState(null);

    const handleLoginfrom = (event) =>{
        event.preventDefault();
        const from = event.target;
        setError("");
        const email = from.email.value;
        const password = from.password.value;

        handleLogin(email,password).then(res=>{
            toast.success('Successfully Login user!');
            from.reset();
            nevigate(fromwhere);
        }).catch(error=>{
            setError(error.message);
        });
    }
    const forgetpasswordemail =()=>{
        handleforgetpassword(forgetemail).then(res=>{
            toast.success('Please check your Eamil Address!')
        }).catch(error=>{
            toast.error("Something wrong try again!")
        })
    };

    return (
        <div className='w-3/6 my-10 mx-auto border p-10 rounded-md'>
            <div><Toaster/></div>
            <h1 className='font-bold text-2xl'>Login</h1>
            <form onSubmit={handleLoginfrom} className='mt-5'>
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="email" id="username" placeholder='Email Address' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="password" name="password" id="password" placeholder='Password' />
                <input className='mt-3' type="checkbox" name="remember" id="remember"/>
                <label className='ml-2 text-sm' htmlFor="checkbox">Remember me</label>
                <input className='block w-full my-4 py-2 bg-yellow-600 rounded-md shadow-md font-bold' type="submit" value="Login" />

                <span className='text-sm text-red-600'>{errormessage}</span>

                <p className='font-semibold text-sm'>Don't Have an Account? <NavLink to="/login/registration"><button className='text-yellow-500'>Create an Account</button></NavLink></p>
                <a href="#my-modal-2" className="text-red-500 text-sm">Forget Password!</a>
            </form>

            <SigninSocialmedia/>
            

        {/* Modal section start */}
            <div className="modal" id="my-modal-2">
                <div className="modal-box">

                    <h3 className="font-bold text-lg mb-3">Rcover Your Passsword</h3>
                    <label htmlFor="email" className='text-sm font-semibold text-gray-400 mt-5'>Your Email Address</label>
                    <input onChange={(event)=>setForgetemail(event.target.value)} type="email" name="forgetemail" id="forgetemail" className='block w-4/5 px-2 py-2 mt-2 text-sm rounded-md bg-gray-100 outline-none font-semibold' />
                        <div className="modal-action">
                            <a href="#" onClick={forgetpasswordemail} className="text-sm font-semibold px-4 py-2 bg-yellow-600 rounded-md text-white">Send</a>
                            <a href="#" className="text-sm font-semibold px-4 py-2 bg-yellow-600 rounded-md text-white">close</a>
                        </div>
                </div>
            </div>
        {/* Modal section end */}
        </div>
    );
};

export default SignInLayout;