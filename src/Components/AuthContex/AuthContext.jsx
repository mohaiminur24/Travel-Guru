import React, { createContext } from 'react';


export const userContext = createContext(null);
const ContextValue = {

}


const AuthContext = ({children}) => {
    return (
        <userContext.Provider value={ContextValue}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;