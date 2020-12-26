import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from "../../constants";
import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";

const Stack = createStackNavigator();

const UnAuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREEN.AUTH.LOGIN} component={LoginScreen} options={{headerTitle: 'Вход'}} />
            <Stack.Screen name={SCREEN.AUTH.REGISTER} component={RegisterScreen} options={{headerTitle: 'Регистрация'}} />
        </Stack.Navigator>
    )
}

export default UnAuthNavigator;