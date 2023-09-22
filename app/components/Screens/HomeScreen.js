import React from "react";
<<<<<<< HEAD
// import styles from '../stylesheets/HomeScreen.styles'
import Header from '../Screens/Header/Header.js';
import Footer from '../Screens/Footer/FooterHome.js'
import {View,Text,Image} from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/HomeScreen.styles"
=======
import styles from '../stylesheets/homeScreen.styles'
import Header from '../screens/Header/Header'
import Footer from '../screens/Footer/FooterHome.js'
import { View, Text, Image } from "react-native"
import global from '../stylesheets/global.styles'
>>>>>>> 2fbdff5ad88bbccd255d479b650921dfe835d190

export default function HomeScreen() {
    return (
<<<<<<< HEAD
    <View style={global.escuro}>
        <Header></Header>
        <View style={styles.diario}>
            <Image source={require('../../assets/images/seta_esquerda.png')} />
            <Text style={styles.hoje}>Hoje</Text>
            <Image source={require('../../assets/images/seta_direita.png')} />
=======
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
>>>>>>> 2fbdff5ad88bbccd255d479b650921dfe835d190
        </View>
    )
}