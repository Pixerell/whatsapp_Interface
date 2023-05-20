import React, { createContext, useState } from 'react';

export const IdInstance = 1101823045;
export const ApiTokenInstance = "d7551160e6a84350934ea4f4e614296fea22d87e659e4a809a";

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
