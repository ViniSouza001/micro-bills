import React from "react";
// import styles from '../stylesheets/HomeScreen.styles'
import Header from '../Screens/Header/Header.js';
import Footer from '../Screens/Footer/FooterHome.js'
import {View,Text,Image} from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/HomeScreen.styles"

export default function HomeScreen (){
    return (
    <View style={global.escuro}>
        <Header></Header>
        <View style={styles.diario}>
            <Image source={require('../../assets/images/seta_esquerda.png')} />
            <Text style={styles.hoje}>Hoje</Text>
            <Image source={require('../../assets/images/seta_direita.png')} />
        </View>
        <Footer></Footer>
    </View> 
)}