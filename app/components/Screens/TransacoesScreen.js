import React from "react";
import Header from './Header/Header.js';
import Footer from './Footer/FooterHome.js'
import { View, Text, Image } from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/transacoesScreen.styles.js"

export default function HomeScreen() {
    return (
        <View style={global.escuro}>
            <Header />
            <View style={global.main}>
                <View>
                    <Image source={require('../../assets/images/faturamento_tema_escuro.png')} />
                    <Text style={styles.txtFaturamento}>Faturamento</Text>
                </View>
                <View>
                    <Image source={require('../../assets/images/lucro_tema_escuro.png')} />
                    <Text style={styles.txtLucro}>Lucro</Text>
                </View>
            </View>

            <Footer />
        </View>
    )
}