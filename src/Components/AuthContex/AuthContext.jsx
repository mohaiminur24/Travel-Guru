import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();

export const userContext = createContext(null);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleRegister = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const Logout = ()=>{
        setLoading(true)
        return signOut(auth);
    };
    const handleLogin = (email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const handlegoogleLogin = ()=>{
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }

    const ContextValue = {
        user,
        setUser,
        loading,
        handleRegister,
        Logout,
        handleLogin,
        handlegoogleLogin
    };

    useEffect(()=>{
       const unsuscribe =  onAuthStateChanged(auth,(loggeduser)=>{
            setUser(loggeduser);
            setLoading(false);
        });

        return(()=>{
            return unsuscribe;
        })
    },[])

    return (
        <userContext.Provider value={ContextValue}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;