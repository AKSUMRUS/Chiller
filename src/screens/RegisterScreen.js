import React from 'react'
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";
import {StyleSheet} from "react-native";
import ButtonCustom from "../components/atoms/ButtonCustom";
import Register from "../components/molecules/Register";
import {View} from "react-native";

const RegisterScreen = ({navigation}) => {
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
            <Register/>
            <ButtonCustom
                title={"Войти"}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: 35
                }}
                onPress={() => {
                    navigation.navigate(SCREEN.AUTH.LOGIN)
                }}
                type={'header2'}
            />
        </View>
    );
}

export default RegisterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});