import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Transacoes from '../Transacoes'
import Calculadora from '../Calculadora'
import Perfil from '../Perfil'
import Resumo from '../Resumo'

const Tab = createBottomTabNavigator()

function Footer ({ usuarioId, showPerfilButton }) {


   const navigation = useNavigation()

   useEffect(() => {
      console.log(usuarioId)
   }, [])

   return (
      <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
         }}>

         {showPerfilButton && (
            <Tab.Screen
               name='Perfil'
               component={Perfil}
               options={{
                  tabBarIcon: ({ color, size }) => (
                     <TouchableOpacity
                        onPress={() => { navigation.navigate("Perfil", { usuarioId }) }}
                        style={{ alignItems: 'center', gap: 3 }}>
                        <Image source={require('../../../assets/images/perfil.png')}
                           style={{ width: 24, height: 24 }} />
                        <Text style={{ color: "#FFF" }}>Perfil</Text>
                     </TouchableOpacity>
                  )
               }}
            />
         )}

         <Tab.Screen
            name='Calculadora'
            component={Calculadora}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <TouchableOpacity
                     style={{ alignItems: 'center', gap: 3 }}
                     onPress={() => { navigation.navigate("Calculadora") }}
                  >
                     <Image source={require('../../../assets/images/calculadora.png')}
                        style={{ width: 24, height: 24 }} />
                     <Text style={{ color: "#FFF" }}>Calculadora</Text>
                  </TouchableOpacity>
               )
            }}
         />

         <Tab.Screen
            name='Transacoes'
            component={Transacoes}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <TouchableOpacity
                     onPress={() => { navigation.navigate("Transacoes", { usuarioId }) }}
                     style={{ alignItems: 'center', gap: 3 }}
                  >
                     <Image source={require('../../../assets/images/transacoes.png')}
                        style={{ width: 24, height: 24 }} />
                     <Text style={{ color: "#FFF" }}>Transações</Text>
                  </TouchableOpacity>

               )
            }}
         />

      </Tab.Navigator>
   )
}

const styles = StyleSheet.create({
   footer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      backgroundColor: '#021422',
      width: '100%',
   },
   tabBar: {
      position: 'absolute',
      backgroundColor: '#021422',
      height: '100%',
   },
   icon: {
      alignItems: 'center',
      gap: 3
   },
   img: {
      width: 24,
      height: 24
   },
   txtLabel: {
      color: "#FFF",
      fontSize: 12
   }
})

export default Footer