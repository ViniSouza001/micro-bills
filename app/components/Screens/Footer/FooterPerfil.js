import React from 'react';
import { Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Transacoes from '../Transacoes'
import Calculadora from '../Calculadora'
import Resumo from '../Resumo'

const Tab = createBottomTabNavigator()

function FooterPerfil() {



   const navigation = useNavigation()

   return (
      <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
         }}>

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
            name='Resumo'
            component={Resumo}
            options={{
               tabBarIcon: ({ color, size }) => (
                  <TouchableOpacity
                     onPress={() => { navigation.navigate("Resumo") }}
                     style={{ alignItems: 'center', gap: 3 }}
                  >
                     <Image source={require('../../../assets/images/grafico.png')}
                        style={{ width: 24, height: 24 }} />
                     <Text style={{ color: "#FFF" }}>Resumo</Text>
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
                     onPress={() => { navigation.navigate("Transacoes") }}
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
      borderTopWidth: 0,
      borderRadius: 4,
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

export default FooterPerfil