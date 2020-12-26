import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {SCREEN} from "../../constants";
import MainScreen from "../../screens/MainScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={SCREEN.MAIN.DASHBOARD} component={MainScreen} options={{headerTitle: 'HomeScreen'}} />
        </Stack.Navigator>
    )
}

export default AuthNavigator;