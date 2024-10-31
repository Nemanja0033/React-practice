import {createContext, useState } from "react";


const UserContext = createContext(
    {
        user: null,
        login: () => {},
        logout: () => {},
    }
);

export const UserProvider = ({children}: any) => {
    const [user, setUser] = useState<any>(null);

    const login = () => {
        setUser({name: 'Jhon', isLoggedIn: true });
    }

    const logout = () => {
        setUser(null);
    }

    return(
        <UserContext.Provider value={{user, login, logout}}>
            {children}
        </UserContext.Provider>
    )
}

export {UserContext}