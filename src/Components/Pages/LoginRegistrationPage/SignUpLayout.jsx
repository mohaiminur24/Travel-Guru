import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import SigninSocialmedia from './SigninSocialmedia';
import { userContext } from '../../AuthContex/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const SignUpLayout = () => {
    const [errormessage, setError] = useState(null);
    const nevigate = useNavigate();

    const {handleRegister} = useContext(userContext);
    
    const Registeruser = (event) =>{
        event.preventDefault();
        const from = event.target;
        setError("");
        
        const name = from.name.value;
        const photurl = from.photourl.value;
        const email = from.email.value;
        const password = from.password.value;
        const confrimpassword = from.confrimpassword.value;
        const checkbox = from.checkbox.checked;

        if(!/^(?=.*?[A-Z])/.test(password)){
            setError("Password at least one upper case english letter");
            return;
        }else if(!/^(?=.*?[a-z])/.test(password)){
            setError("Password at least one lower case english letter");
            return;
        }else if(!/^(?=.*?[#?!@$ %^&*-])/.test(password)){
            setError("Password at least one special character or space");
            return;
        }else if(password.length<6){
            setError("Password mush have more then 6 length!");
            return;
        }else if(password !== confrimpassword){
            setError("Password not match with confrim Password!");
            return;
        }else if(!checkbox){
            setError("Accept our terms and conditions!");
            return;
        }


        handleRegister(email,password).then(res=>{
            res.user.displayName = name
            res.user.photoURL = photurl
            toast.success('Registation complete Successfully!')
            from.reset();
            nevigate("/");

        }).catch(error=>{
            setError(error.message)
        })

    }



    return (
        <div className='w-3/6 mx-auto border p-10 my-10 rounded-md'>
            <div><Toaster/></div>
            <h1 className='font-bold text-2xl'>Registration</h1>
            <form onSubmit={Registeruser} className='mt-5'>
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="name" id="name" placeholder='Your name' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="text" name="photourl" id="photourl" placeholder='Photo URL' />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="email" name="email" id="username" placeholder='Email Address' required />
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="password" name="password" id="password" placeholder='Password' required/>
                <input className='block outline-none w-full border-b my-2 px-3 py-2' type="password" name="confrimpassword" id="confrimpassword" placeholder='Confrim Password' />
                <input className='mt-3' type="checkbox" name="checkbox" id="remember"/>
                <label className='ml-2 text-sm' htmlFor="checkbox">Are you agree with our Terms and Conditions</label>
                <input className='block w-full my-4 py-2 bg-yellow-600 rounded-md shadow-md font-bold' type="submit" value="Register" />

                <span className='text-sm text-red-600'>{errormessage}</span>

                <p className='font-semibold text-sm'>Already have an Account? <NavLink to="/login"><button className='text-yellow-500'>Login</button></NavLink></p>
            </form>
            <SigninSocialmedia/>
            
        </div>
    );
};

export default SignUpLayout;