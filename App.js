import React from 'react';
import { StyleSheet } from 'react-native';
import {store} from "./src/store";
import {Provider} from "react-redux";
import RootNavigator from "./src/navigation/RootNavigator";
import {ThemeProvider} from "./src/context/ThemeStore";
import {NavigationContainer} from '@react-navigation/native'

export default function App() {
  return (
      <NavigationContainer>
        <ThemeProvider>
          <Provider store={store}>
            <RootNavigator/>
          </Provider>
        </ThemeProvider>
      </NavigationContainer>
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
