import React, {useEffect} from 'react'
import {useNavigation} from "../context/NavigationStore";
import {SCREEN} from "../constants";
import {useTheme} from "../context/ThemeStore";
import {ActivityIndicator, StyleSheet} from "react-native";
import ButtonCustom from "../components/atoms/ButtonCustom";
import LogIn from "../components/molecules/Login";
import {View, Switch} from "react-native";
import TextViewCustom from "../components/atoms/TextViewCustom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../store/actions/auths/auths";
import TextInputCustom from "../components/atoms/TextInputCustom";
import {getUser} from "../store/actions/auths/auths";

const MainScreen = () => {
    const {setScreen} = useNavigation();
    const {isLight, setLight, setDark, THEME_COLOR} = useTheme();
    const  dispatch = useDispatch();
    const {isLoading, user} = useSelector(store => store.auth)

    const toggleSwitch = (value) => {
        if(value) {
            setLight();
        } else {
            setDark();
        }
    }
    useEffect(() => {
        if(!user) {
            dispatch(getUser())
        }
    }, [])
    useEffect(()=> {
        console.log(user)
    }, [user])

    return(
        <View style={[styles.container,{backgroundColor: THEME_COLOR.MAIN_BG}]}>
            <TextViewCustom type={'header2'}>MAIN</TextViewCustom>
            {(isLoading || !user) ? <ActivityIndicator color={'red'} size={60}/> : (
                <React.Fragment>
                    <TextViewCustom type={'header2'}>{user.name} {user.email}</TextViewCustom>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isLight ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isLight}
                    />
                    <ButtonCustom
                        disabled={isLoading}
                        onPress={() => {
                            dispatch(logOut())
                            setScreen(SCREEN.LOGIN)
                        }}
                        type={'header2'}
                        title={"Выйти"}/>
                </React.Fragment>
            )}
        </View>
    );
}

export default MainScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});