import { createContext,  useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('Serbian');

    const toggleLanguageChange = () => {
        setLanguage(prevLanguage => prevLanguage === 'Serbian' ? 'English' : 'Serbian');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguageChange }}>
            {children}
        </LanguageContext.Provider>
    );
};

export { LanguageContext };
