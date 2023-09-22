<<<<<<< HEAD
import React from "react";
// import styles from '../stylesheets/HomeScreen.styles'
import Header from '../Screens/Header/Header.js';
import Footer from '../Screens/Footer/FooterHome.js'
import {View,Text,Image} from "react-native"
=======
>>>>>>> 9f1942a152da5d1ecc74b63176937f24b633efd8

import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"

<<<<<<< HEAD
export default function HomeScreen (){
    return (
    <View>
        <Header></Header>
        <View>
            <Image source={require('../../assets/images/seta_esquerda.png')} />
            <Text>...</Text>
            <Image source={require('../../assets/images/seta_direita.png')} />
=======
function HomeScreen(){
    return <View style={styles.container}>
        <View style={styles.borderRadius}>
            <Text style={styles.hoje}>Hoje</Text>
>>>>>>> 9f1942a152da5d1ecc74b63176937f24b633efd8
        </View>
        <Footer></Footer>
    </View>
<<<<<<< HEAD
)}  
=======
    }

    export default HomeScreen
>>>>>>> 9f1942a152da5d1ecc74b63176937f24b633efd8
