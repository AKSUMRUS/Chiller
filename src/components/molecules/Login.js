import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {TextInput} from "react-native";
import {Button} from "react-native";
import TextInputCustom from "../atoms/TextInputCustom";
import TextViewCustom from "../atoms/TextViewCustom";
import ButtonCustom from "../atoms/ButtonCustom";
import {SCREEN} from "../../constants";
import {useNavigation} from "../../context/NavigationStore";
import {signUp} from "../../store/actions/auths/auths";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch} from "react-redux";
import {login} from "../../store/actions/auths/auths";

export default function LogIn() {
    const {setScreen} = useNavigation();
    const [password,setPassword] = React.useState('');
    const [email,setEmail] = React.useState('');
    const  dispatch = useDispatch();

    const storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@storage_Key', jsonValue)
        } catch (e) {
            // saving error
        }
    }

    return (
        <View style={styles.container}>
            <TextViewCustom type={'header2'}>Email</TextViewCustom>
            <TextInputCustom placeholder="Enter your email" style={{marginBottom: 20}} onChangeText={text => setEmail(text)} value={email}/>
            <TextViewCustom type={'header2'}>Password</TextViewCustom>
            <TextInputCustom placeholder="Enter your password" style={{marginBottom: 20}} onChangeText={text => setPassword(text)} value={password}/>
            <ButtonCustom title={"Вход"} type={'header2'} onPress={() => {
                const raw = {
                    email: email,
                    password: password
                };
                dispatch(login(raw))
                storeData().then( () => {setScreen(SCREEN.MAIN);})
            }}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
