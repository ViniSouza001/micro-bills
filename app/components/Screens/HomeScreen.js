import React from "react";
import Header from '../Screens/Header/Header.js';
import Footer from '../Screens/Footer/FooterHome.js'
import { View, Text, Image } from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/homeScreen.styles.js"

export default function HomeScreen() {
    return (
        <View style={global.escuro}>
            <Header />
            <View style={[styles.diario, global.main]}>
                <View style={styles.hoje}>
                    <Image style={styles.setaE} source={require('../../assets/images/seta_esquerda.png')} />
                    <Text style={styles.text}>Hoje</Text>
                    <Image style={styles.setaD} source={require('../../assets/images/seta_direita.png')} />
                </View>
                <View style={styles.grafico}>
                   <Text style={styles.faturaTotal}>Faturamento</Text>
                   <Text style={styles.total}>Total</Text>
                   <Text style={styles.faturaTotal}>R$ 20,00</Text>
                   <Text style={styles.resumo}>Ver Resumo</Text>
                </View>
                <View style={styles.cards}>
                    <View style={[styles.card, styles.divPix]}>
                        <Image source={require('../../assets/images/pix.png')} />
                        <Text style={styles.txtPix}>R$00,00</Text>
                    </View>
                    <View style={[styles.card, styles.cartao]}>
                        <Image source={require('../../assets/images/cartao.png')} />
                        <Text style={styles.txtCartao}>R$ 00,00</Text>
                    </View>
                    <View style={[styles.card, styles.dinheiro]}>
                        <Image source={require('../../assets/images/money.png')} />
                        <Text style={styles.txtDinheiro}>R$ 00,00</Text>
                    </View>
                </View>
                <View style={styles.totalDeVendas}>
                    <Text style={styles.txtVendas}>Total De Vendas</Text>
                    <Text style={styles.txtNumberVendas}>1</Text>
                </View>
            </View>
            <Footer />
        </View>
    )
}