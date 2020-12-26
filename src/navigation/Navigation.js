import React, {useEffect} from "react";
import {Text, View} from "react-native";
import { useNavigation} from "../context/NavigationStore";
import {SCREEN} from "../constants";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import {useTheme} from "../context/ThemeStore";
import MainScreen from "../screens/MainScreen";

const Navigation = () => {
    const {screen, setScreen} = useNavigation()
    const {theme, setDark, setLight, isLight, THEME_COLOR} = useTheme();
    let renderScreen;
    switch (screen) {
        case SCREEN.LOGIN:
            renderScreen = <LoginScreen/>
            break;
        case SCREEN.REGISTER:
            renderScreen = <RegisterScreen/>
            break;
        case SCREEN.MAIN:
            renderScreen = <MainScreen/>
            break;
    }
    return <View style={{flex: 1, backgroundColor: THEME_COLOR.MAIN_BG}}>{renderScreen}</View>
}

export default Navigation;