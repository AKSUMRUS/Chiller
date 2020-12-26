import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {TextInput} from "react-native";
import {Button} from "react-native";
import TextInputCustom from "../atoms/TextInputCustom";
import TextViewCustom from "../atoms/TextViewCustom";
import ButtonCustom from "../atoms/ButtonCustom";
import {SCREEN} from "../../constants";
import {useNavigation} from "../../context/NavigationStore";
import {signUp} from "../../store/actions/auths/auths";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/actions/auths/auths";

export default function LogIn() {
    const {setScreen} = useNavigation();
    const [password,setPassword] = React.useState('');
    const [email,setEmail] = React.useState('');
    const  dispatch = useDispatch();
    const {isLoading, errors} = useSelector(store => store.auth)

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
            {isLoading ? <ActivityIndicator/> : null}
            <TextViewCustom type={'header2'}>Email</TextViewCustom>
            <TextInputCustom placeholder="Enter your email" style={{marginBottom: 20}} onChangeText={text => setEmail(text)} value={email}/>
            <TextViewCustom type={'header2'}>Password</TextViewCustom>
            <TextInputCustom placeholder="Enter your password" style={{marginBottom: 20}} onChangeText={text => setPassword(text)} value={password}/>
            <ButtonCustom title={"Вход"} type={'header2'} onPress={() => {
                dispatch(login({
                    email: email,
                    password: password
                }))
            }}
                disabled={isLoading}
            />
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
