import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import LoginScreen from './components/Screens/LoginScreen'
import Home from './components/Screens/HomeScreen'
import CriarConta from './components/Screens/CriarConta';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='Pagina login'
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Criar conta'
          component={CriarConta}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}