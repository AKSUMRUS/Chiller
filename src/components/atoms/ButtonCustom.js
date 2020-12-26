import React from 'react';
import { Pressable } from "react-native";
import TextViewCustom from "./TextViewCustom";

export default function ButtonCustom({ onPress, style, type, title, disabled = false}){

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled}
            style={(pressed) => [
                {
                    borderRadius: 8,
                    padding: 6,
                    fontSize: 16,
                    backgroundColor: '#44b2b8',
                    opacity: (pressed || disabled) ? 0.5 : 1,
                },
                style
            ]}>
            <TextViewCustom type={type}>{title}</TextViewCustom>
        </Pressable>
    );
}