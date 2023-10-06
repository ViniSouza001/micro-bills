import React, { useEffect } from "react";
import Header from './Header/Header.js';
import { View, Text, Image } from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/transacoesScreen.styles.js"

export default function HomeScreen({ route }) {
    const { usuarioId } = route.params

    useEffect(() => {
        console.log(`Transacoes: ${ usuarioId }`)
        const fetchTransacoes = async () => {
            const response = await fetch('http://10.87.207.10:3000', { method: "POST" })
        }
    }, [])
    return (
        <View style={global.escuro}>
            <Header />
            <View style={global.main}>
                <View style={{ height: '10%', borderBottomColor: '#fff', borderBottomWidth: 1, margin: 5, flexDirection: "row", justifyContent: "space-around", paddingBottom: 15 }}>
                    <View style={{ flexDirection: "column", alignItems: "center", gap: 10, width: '49%', justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignItems: "center", gap: 10 }}>
                            <Image style={styles.img} source={require('../../assets/images/faturamento_tema_escuro.png')} />
                            <Text style={styles.txt}>Faturamento</Text>
                        </View>
                        <Text style={styles.verde}>R$5.045,60</Text>
                    </View>
                    <View style={{ height: '100%', width: '2%', borderLeftColor: '#fff', borderLeftWidth: 2, justifyContent: 'center' }}></View>

                    <View style={{ flexDirection: "column", alignItems: 'center', gap: 10, width: '49%', justifyContent: 'center' }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            <Image style={styles.imgL} source={require('../../assets/images/lucro_tema_escuro.png')} />
                            <Text style={styles.txt}>Lucro</Text>
                        </View>
                        <Text style={styles.verde}>R$3.045,60</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}