import React, {useEffect, useState} from "react";
import {LIGHT_THEME} from "../styles/lightTheme";
import {DARK_THEME} from "../styles/darkTheme";

const ThemeContext = React.createContext({theme: 'LIGHT', setDark: () => {}, setLight: () => {}})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('LIGHT');
    const setDark = () => {
        setTheme('DARK');
    }
    const setLight = () => {
        setTheme('LIGHT');
    }
    return <ThemeContext.Provider value={{theme, setDark, setLight}}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
    const {theme, setLight, setDark} = React.useContext(ThemeContext);
    // const [THEME_COLOR, setThemeColor] = useState({...LIGHT_THEME});
    // useEffect(() => {
    //     if(theme === 'LIGHT') {
    //         setThemeColor({...LIGHT_THEME})
    //     } else {
    //         setThemeColor({...DARK_THEME})
    //     }
    // }, [theme])
    return {
        theme,
        setLight,
        setDark,
        isLight: theme === 'LIGHT',
        isDark: theme === 'DARK',
        THEME_COLOR: theme === 'LIGHT' ? LIGHT_THEME : DARK_THEME
    }
}
