import React from 'react';
import {StyleSheet, TextInput, Pressable} from "react-native";
import TextViewCustom from "./TextViewCustom";

export default function ButtonCustom(props){

    return (
        <Pressable onPress={props.onPress} style={[{
            borderRadius: 8,
            padding: 6,
            fontSize: 16,
            backgroundColor: '#44b2b8'
            },props.style]}>
            <TextViewCustom type={props.type}>{props.title}</TextViewCustom>
        </Pressable>
    );
}