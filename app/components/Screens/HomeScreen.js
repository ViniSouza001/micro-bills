import React from "react";
// import styles from '../stylesheets/HomeScreen.styles'
import Header from '../Screens/Header/Header.js';
import Footer from '../Screens/Footer/FooterHome.js'
import {View,Text,Image} from "react-native"


export default function HomeScreen (){
    return (
    <View>
        <Header></Header>
        <View>
            <Image source={require('../../assets/images/seta_esquerda.png')} />
            <Text>...</Text>
            <Image source={require('../../assets/images/seta_direita.png')} />
        </View>
        <Footer></Footer>
    </View>
)}  