import React, { createContext, useState } from 'react';
import app from './Firebase';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(app)

export const userContext = createContext(null);

const AuthContext = ({children}) => {
    const [user, setUser] = useState(null);

    const handleRegister = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    };

    const ContextValue = {
        user,
        setUser,
        handleRegister
    };

    return (
        <userContext.Provider value={ContextValue}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;