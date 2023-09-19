import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './components/screens/HomeScreen'
import CriarConta from './components/screens/CriarConta';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"

export default function App() {
  const Stack = createNativeStackNavigator()


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Pagina login'
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Criar conta'
          component={CriarConta}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}