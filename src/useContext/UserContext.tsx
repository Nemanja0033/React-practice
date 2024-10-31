import { createContext } from "react";


const UserContext = createContext(
    {
        name: null,
        login: () => {},
        logout: () => {},
    }
)