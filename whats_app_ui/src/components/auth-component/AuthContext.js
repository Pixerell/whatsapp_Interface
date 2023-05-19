import React, { createContext, useState } from 'react';

export const IdInstance = 1101822890;
export const ApiTokenInstance = "7f77d49bab304978b6830ced2e4083a6bb1e383459534746b0";

const AuthContext = createContext(undefined);

function AuthProvider({ children }) {
    const [isAuthorized, setIsAuthorized] = useState(
        localStorage.getItem('isAuthorized') === 'true'
    );

    const updateIsAuthorized = (value) => {
        localStorage.setItem('isAuthorized', value.toString());
        setIsAuthorized(value);
    };

    const authContextValue = {
        isAuthorized,
        updateIsAuthorized,
    };

    return (
        <AuthContext.Provider value={authContextValue}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthProvider, AuthContext };
