import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Alert, ActivityIndicator} from 'react-native';
import TextInputCustom from "../atoms/TextInputCustom";
import TextViewCustom from "../atoms/TextViewCustom";
import ButtonCustom from "../atoms/ButtonCustom";
import {useDispatch, useSelector} from "react-redux";
import {signUp} from "../../store/actions/auths/auths";

export default function Register() {
    const [password,setPassword] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [name,setName] = React.useState('');
    const {isLoading, errors} = useSelector(store => store.auth)
    const  dispatch = useDispatch();

    useEffect(()=>{
        Alert.alert('Error', errors?.message || 'Any Error')
    },[errors])

    const onSignUpStart = () => {
        dispatch(signUp({
            email: email,
            password: password,
            name: name,
            lastName: name
        }))
    }

    return (
        <View style={styles.container}>
            {isLoading ? <ActivityIndicator/> : null}
            <TextViewCustom type={'header2'}>Name</TextViewCustom>
            <TextInputCustom placeholder="Enter your name" style={{marginBottom: 20}} onChangeText={text => setName(text)} value={name}/>
            <TextViewCustom type={'header2'}>Email</TextViewCustom>
            <TextInputCustom placeholder="Enter your email" style={{marginBottom: 20}} onChangeText={text => setEmail(text)} value={email}/>
            <TextViewCustom type={'header2'}>Password</TextViewCustom>
            <TextInputCustom placeholder="Enter your password" style={{marginBottom: 20}} onChangeText={text => setPassword(text)} value={password}/>
            <ButtonCustom
                title={"Зарегистрироваться"}
                type={'header2'}
                disabled={isLoading}
                onPress={onSignUpStart}
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