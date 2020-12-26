import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TextInputCustom from "../atoms/TextInputCustom";
import TextViewCustom from "../atoms/TextViewCustom";
import ButtonCustom from "../atoms/ButtonCustom";
import {useNavigation} from "../../context/NavigationStore";
import {BASE_URL, SCREEN} from "../../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from "react-redux";
import {getPosts, postPosts} from "../../store/actions/posts/posts";
import {signUp} from "../../store/actions/auths/auths";

export default function Register() {
    const {setScreen} = useNavigation();
    const [password,setPassword] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [name,setName] = React.useState('');
    const {isLoading, posts, errors} = useSelector(store => store.posts)
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
            <TextViewCustom type={'header2'}>Name</TextViewCustom>
            <TextInputCustom placeholder="Enter your name" style={{marginBottom: 20}} onChangeText={text => setName(text)} value={name}/>
            <TextViewCustom type={'header2'}>Email</TextViewCustom>
            <TextInputCustom placeholder="Enter your email" style={{marginBottom: 20}} onChangeText={text => setEmail(text)} value={email}/>
            <TextViewCustom type={'header2'}>Password</TextViewCustom>
            <TextInputCustom placeholder="Enter your password" style={{marginBottom: 20}} onChangeText={text => setPassword(text)} value={password}/>
            <ButtonCustom title={"Зарегистрироваться"} type={'header2'} onPress={() => {
                const raw = {
                    email: email,
                    password: password,
                    name: name,
                    lastName: name
                };
                dispatch(signUp(raw))
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