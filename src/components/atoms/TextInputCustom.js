import React from 'react';
import {StyleSheet, TextInput} from "react-native";

export default function TextInputCustom(props){
    const [textInputValue, setTextInputValue] = React.useState('');

    return (
        <TextInput
            style={[{
                height: 40,
                borderColor: 'gray',
                borderWidth: 1,
                placeholderTextColor: 'gray',
            },props.style]}
            onChangeText={props.onChangeText}
            value={props.value}
            placeholder={props.placeholder}
        />
    );
}