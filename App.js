import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from "./src/components/molecules/Login";
import {store} from "./src/store";
import {Provider} from "react-redux";
import {NavigationProvider} from "./src/context/NavigationStore";
import Navigation from "./src/navigation/Navigation";
import {ThemeProvider} from "./src/context/ThemeStore";

export default function App() {
  return (
      <NavigationProvider>
        <ThemeProvider>
          <Provider store={store}>
            <Navigation/>
          </Provider>
          </ThemeProvider>
      </NavigationProvider>
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
