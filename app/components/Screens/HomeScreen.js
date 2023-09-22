import React from "react";
import styles from '../stylesheets/homeScreen.styles'
import Header from '../screens/Header/Header'
import Footer from '../screens/Footer/FooterHome.js'
import { View, Text, Image } from "react-native"
import global from '../stylesheets/global.styles'

export default function HomeScreen() {
    return (
        <View style={global.escuro}>
            <Header></Header>
            <View style={styles.diario}>
                <View style={styles.hoje}>
                    <Image source={require('../../assets/images/seta_esquerda.png')} />
                    <Text>Hoje</Text>
                    <Image source={require('../../assets/images/seta_direita.png')} />
                </View>
            </View>
            <Footer></Footer>
        </View>
    )
}