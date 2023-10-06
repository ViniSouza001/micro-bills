import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/Screens/LoginScreen'
import Home from './components/Screens/HomeScreen'
import Perfil from './components/Screens/Perfil';
import CriarConta from './components/Screens/CriarConta';
import Calculadora from './components/Screens/Calculadora';
import Resumo from './components/Screens/Resumo';
import Transacoes from './components/Screens/Transacoes'

import FlashMessage from 'react-native-flash-message';

export default function App() {
  const Stack = createNativeStackNavigator()
  const [usuarioId, setUsuarioId] = useState('usuarioId')

  useEffect(() => {
    setUsuarioId("awdsa")
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Pagina login'
          component={LoginScreen}
          initialParams={{ "usuarioId": usuarioId, "setUsuarioId": setUsuarioId }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Criar conta'
          component={CriarConta}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Perfil'
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Calculadora'
          component={Calculadora}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Resumo'
          component={Resumo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Transacoes'
          component={Transacoes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <StatusBar hidden />
      <FlashMessage
        position={"top"}
        color="#FFF"
      />
    </NavigationContainer>
  );
}