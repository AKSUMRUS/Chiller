import React from 'react';
import {StyleSheet, TextInput} from "react-native";
import {Text} from "react-native";
import {View} from "react-native";
import {useTheme} from "../../context/ThemeStore";
import {textColors, textStyles} from "./styles";

const TextViewCustom = ({children, type, style, ...otherProps}) => {
    const {THEME_COLOR} = useTheme();
    //{color: textColors(THEME_COLOR)[type].text},
    return <Text style={[{color: textColors(THEME_COLOR)[type].text},textStyles[type], style]} {...otherProps}>{children}</Text>
    // {color: textColors(THEME_COLOR)[type].text}
}

export default TextViewCustom;