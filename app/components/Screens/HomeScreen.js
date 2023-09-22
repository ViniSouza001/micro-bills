import React from "react";
import styles from '../stylesheets/HomeScreen.styles'
import {View,Text,Image} from "react-native"


export default function HomeScreen (){
    return (
    <View style>
        <View>
            <Image source={require('../../assets/images/seta_esquerda.png')} />
            <Text>Dia</Text>
            <Image source={require('../../assets/images/seta_direita.png')} />
        </View>
    </View>
)}