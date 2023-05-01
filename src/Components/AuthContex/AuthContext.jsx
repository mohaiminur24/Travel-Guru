import React, { createContext, useEffect, useState } from 'react';
import app from './Firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(app)

export const userContext = createContext(null);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);

    const handleRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const Logout = ()=>{
        return signOut(auth);
    };

    const ContextValue = {
        user,
        setUser,
        handleRegister,
        Logout
    };

    useEffect(()=>{
       const unsuscribe =  onAuthStateChanged(auth,(loggeduser)=>{
            setUser(loggeduser);
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