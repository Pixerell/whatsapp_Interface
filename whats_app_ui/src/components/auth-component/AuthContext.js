import React, { createContext, useState } from 'react';

export const IdInstance = 1101823055;
export const ApiTokenInstance = "7ab71484280a4bd89244988f73f694ed416a6e29c23b46e9aa";

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
