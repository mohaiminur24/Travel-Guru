import React, { useContext } from 'react';
import Header from '../../Header';
import { Outlet } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div>
            <Header>logologin.png</Header>
            <div className='min-h-[calc(100vh-100px)] w-4/5 mx-auto flex justify-center items-center'>
                <Outlet/>
            </div>
            
        </div>
    );
};

export default LoginPage;