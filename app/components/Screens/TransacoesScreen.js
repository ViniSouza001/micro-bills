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
                <View style={{height:'7%',borderBottomColor: '#fff', borderBottomWidth: 2, margin: 5, flexDirection: "row", justifyContent: "space-around", padding: 5}}>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Image style={styles.img} source={require('../../assets/images/faturamento_tema_escuro.png')} />
                        <Text style={styles.txt}>Faturamento</Text>
                    </View>
                    <View style={{height: '100%', width: '2', borderLeftColor: '#fff', borderLeftWidth: 2}}></View>
                    <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                        <Image style={styles.imgL} source={require('../../assets/images/lucro_tema_escuro.png')} />
                        <Text style={styles.txt}>Lucro</Text>
                    </View>
                </View>
            </View>

            <Footer />
        </View>
    )
}