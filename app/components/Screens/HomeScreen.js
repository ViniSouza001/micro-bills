import React from "react";
import Header from '../screens/Header/Header.js';
import Footer from '../screens/Footer/FooterHome.js'
import { View, Text, Image } from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/homeScreen.styles.js"

export default function HomeScreen() {
    return (
        <View style={global.escuro}>
            <Header />
            <View style={styles.diario}>
                <View style={styles.hoje}>
                    <Image source={require('../../assets/images/seta_esquerda.png')} />
                    <Text>Hoje</Text>
                    <Image source={require('../../assets/images/seta_direita.png')} />
                </View>
            </View>
            <Footer />
        </View>
    )
}