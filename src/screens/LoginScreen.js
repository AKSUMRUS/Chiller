import React from 'react'
import {useNavigation} from "../context/NavigationStore";
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";
import {StyleSheet} from "react-native";
import ButtonCustom from "../components/atoms/ButtonCustom";
import LogIn from "../components/molecules/Login";
import {View} from "react-native";

const LoginScreen = ({navigation}) => {
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();
    const toggleSwitch = (value) => {
        if(value) {
            setLight();
        } else {
            setDark();
        }
    }

    return(
        <View style={[styles.container,{backgroundColor: THEME_COLOR.MAIN_BG}]}>
            <LogIn/>
            <ButtonCustom
                title={"Зарегистрироваться"}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 35
                }}
                onPress={() => {
                    navigation.navigate(SCREEN.AUTH.REGISTER)
                }}
                type={'header2'}
            />
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