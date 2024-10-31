import { createContext, useState } from "react";

interface User {
    name: string;
    isLoggedIn: boolean;
}

interface UserContextType {
    user: User | null;
    login: () => void;
    logout: () => void;
}

const UserContext = createContext<UserContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = () => {
        setUser({ name: 'John', isLoggedIn: true });
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserContext };
