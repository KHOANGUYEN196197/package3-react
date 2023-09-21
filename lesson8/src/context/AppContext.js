import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    // da ngon ngu
    const [language, setLanguage] = useState("vn")
    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }
    // toggle Background

    const [theme, setTheme] = useState(true);
    const changeTheme = () => {
        setTheme(!theme)
    }

    //vi du call api check Login

    const [isLogin, setIsLogin] = useState(false)
    useEffect(() => {
        checkLogin();
    }, [])

    const checkLogin = () => {
        setTimeout(() => {
            setIsLogin(true)
        }, 2000);
    }
    return (
        <AppContext.Provider value={{ language, changeLanguage, theme, changeTheme, isLogin }}>{children}</AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext);
}