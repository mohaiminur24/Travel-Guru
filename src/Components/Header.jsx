import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FaSearch,FaUserTie } from 'react-icons/fa';
import { userContext } from './AuthContex/AuthContext';
import toast, { Toaster } from 'react-hot-toast';

const Header = ({children}) => {
    const {user,Logout} = useContext(userContext);
    const handleLogout =()=>{
            Logout().then(res=>{
                toast.success('LogOut complete Successfully!')
            }).catch(error=>{
                console.error(error.message);
            })
    }
    return (
        <div className='bg-transparent w-4/5 mx-auto h-20 flex justify-between items-center'>
            <img className='w-20 h-fit' src={children} alt="" />
            <div className='flex gap-10 items-center'>
            <div><Toaster/></div>
                <div className='relative'>
                    <span className='absolute top-3 left-4 opacity-50 left-'><FaSearch/></span>
                    <input className='border bg-transparent pl-10 pr-5 font-normal rounded-sm py-2 outline-none text-white text-opacity-100 text-sm' type="text" placeholder='Search your Destination ...' name="" id="" />
                </div>

                <ul className='flex gap-5'>
                    <li>
                        <NavLink to="/" className={({isActive})=> isActive && "text-yellow-500 font-bold"}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/destination" className={({isActive})=> isActive && "text-yellow-500 font-bold"}>Destination</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({isActive})=> isActive && "text-yellow-500 font-bold"}>Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className={({isActive})=> isActive && "text-yellow-500 font-bold"}>Contact</NavLink>
                    </li>
                </ul>

                <span>{user && <FaUserTie/>}</span>

                {
                    user?<button onClick={handleLogout} className="px-5 bg-yellow-600 text-black py-2 rounded-md shadow-md">Logout</button>:<NavLink to="/login" className="px-5 bg-yellow-600 text-black py-2 rounded-md shadow-md">Login</NavLink>
                }

                
                
            </div>
        </div>
    );
};

export default Header;