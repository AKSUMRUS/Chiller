import React from 'react'
import {useNavigation} from "../context/NavigationStore";
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";
import {StyleSheet} from "react-native";
import ButtonCustom from "../components/atoms/ButtonCustom";
import LogIn from "../components/molecules/Login";
import {View, Switch} from "react-native";
import TextViewCustom from "../components/atoms/TextViewCustom";
import {useDispatch} from "react-redux";
import {logOut} from "../store/actions/auths/auths";

const LoginScreen = () => {
    const {setScreen} = useNavigation();
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();
    const  dispatch = useDispatch();

    const toggleSwitch = (value) => {
        if(value) {
            setLight();
        } else {
            setDark();
        }
    }

    return(
        <View style={[styles.container,{backgroundColor: THEME_COLOR.MAIN_BG}]}>
            <TextViewCustom type={'header2'}>MAIN</TextViewCustom>
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isLight ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isLight}
            />
            <ButtonCustom onPress={() => {
                dispatch(logOut())
                setScreen(SCREEN.LOGIN)
            }} type={'header2'} title={"Выйти"}/>
        </View>
    );
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});