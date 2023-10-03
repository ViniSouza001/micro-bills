import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from '@react-navigation/native'
import TransacoesScreen from '../Screens/TransacoesScreen'

const Tab = createBottomTabNavigator()

function Footer () {

   const navigation = useNavigation()

   return (
      <Tab.Navigator
         screenOptions={{
            tabBarActiveTintColor: '#FFF',
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
         }}>
         <Tab.Screen
            name="Transacoes"
            component={TransacoesScreen}
            options={{
               headerShown: false,
               tabBarIcon: () => (
                  <View style={styles.footer}>
                     <TouchableOpacity
                        style={styles.icon}
                        onPress={() => { navigation.navigate('Transacoes') }}
                     >
                        <Image
                           source={require('../../assets/images/perfil.png')}
                           style={styles.img} />
                        <Text style={styles.txtLabel}>Perfil</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.icon} onPress={() => { navigation.navigate('Transacoes') }}>
                        <Image source={require('../../assets/images/calculadora.png')} style={styles.img} />
                        <Text style={styles.txtLabel}>Calculadora</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.icon} onPress={() => { navigation.navigate('Transacoes') }}>
                        <Image source={require('../../assets/images/grafico.png')} style={styles.img} />
                        <Text style={styles.txtLabel}>Resumo</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.icon} onPress={() => { navigation.navigate('Transacoes') }}>
                        <Image source={require('../../assets/images/transacoes.png')} style={styles.img} />
                        <Text style={styles.txtLabel}>Transacoes</Text>
                     </TouchableOpacity>
                  </View>
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

export default Footer