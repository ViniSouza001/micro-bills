import React, {useEffect, useState} from "react";
import {useFocusEffect} from '@react-navigation/native'
import Header from './Header/Header.js';
import {View, Text, Image, FlatList} from "react-native"
import global from "../stylesheets/global.styles.js"
import styles from "../stylesheets/transacoesScreen.styles.js"
import setaDebito from '../../assets/images/seta_debito.png'
import setaLucro from '../../assets/images/seta_lucro.png'

export default function HomeScreen ({route}) {
    const {usuarioId} = route.params
    const [ errorReturned, setErrorReturned ] = useState('')
    const [ transacoes, setTransacoes ] = useState([])
    const [ valorTotal, setValorTotal ] = useState(0)
    const [ lucro, setLucro ] = useState(0)

    useEffect(() => {
        const body = {"usuarioId": usuarioId}

        const fetchValores = async () => {
            const responseLucro = await fetch('http://10.87.207.10:3000/lucroVendas', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const dataLucro = await responseLucro.json()
            console.log(dataLucro)

            const response = await fetch('http://10.87.207.10:3000/lucroVendas', {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });
            const data = await response.json()
            console.log(data)

            // valores
            setLucro(dataLucro.lucro.valorTotal)
        }
        fetchValores()

        const fetchTransacoes = async () => {
            const response = await fetch('http://10.87.207.10:3000/listarTransacao', {
                "method": "POST",
                "body": JSON.stringify(body),
                "headers": {
                    'Content-Type': "application/json"
                }
            })
            const data = await response.json()
            if(!data.success) {
                setErrorReturned(data.message)
            } else {
                setTransacoes(data.transacoes)
            }
        }
        fetchTransacoes()
    }, [])
    return (
        <View style={global.escuro}>
            <Header />
            <View style={[ global.main, styles.container ]}>
                <View style={{height: '10%', borderBottomColor: '#fff', borderBottomWidth: 1, margin: 5, flexDirection: "row", justifyContent: "space-around", paddingBottom: 15}}>
                    <View style={{flexDirection: "column", alignItems: "center", gap: 10, width: '49%', justifyContent: 'center'}}>
                        <View style={{flexDirection: 'row', alignItems: "center", gap: 10}}>
                            <Image style={styles.img} source={require('../../assets/images/faturamento_tema_escuro.png')} />
                            <Text style={styles.txt}>Faturamento</Text>
                        </View>
                        <Text style={styles.verde}>R${(lucro).toFixed(2)}</Text>
                    </View>
                    <View style={{height: '100%', width: '2%', borderLeftColor: '#fff', borderLeftWidth: 2, justifyContent: 'center'}}></View>

                    <View style={{flexDirection: "column", alignItems: 'center', gap: 10, width: '49%', justifyContent: 'center'}}>
                        <View style={{flexDirection: "row", alignItems: "center", gap: 10}}>
                            <Image style={styles.imgL} source={require('../../assets/images/lucro_tema_escuro.png')} />
                            <Text style={styles.txt}>Lucro</Text>
                        </View>
                        <Text style={styles.verde}>R${(lucro).toFixed(2)}</Text>
                    </View>
                </View>
                {errorReturned
                    ?
                    <Text style={{color: '#FFF'}}>{errorReturned}</Text>
                    :
                    <FlatList
                        style={{width: '100%', flexDirection: 'column'}}
                        data={transacoes}
                        renderItem={({item}) => (
                            <View style={styles.card}>
                                <View style={styles.precoArea}>
                                    {item.tipo == "Venda" ?
                                        <Image source={setaLucro} /> :
                                        <Image source={setaDebito} />
                                    }
                                    <Text style={{color: "#FFF"}}>{item.quantidade}x {item.item}</Text>
                                </View>
                                <View style={styles.valorArea}>
                                    {item.formaPagto == "Dinheiro" && <Image style={styles.formaPagto} source={require('../../assets/images/money.png')} />}
                                    {item.formaPagto == "Pix" && <Image style={styles.formaPagto} source={require('../../assets/images/pix.png')} />}
                                    {item.formaPagto == "Cartao" && <Image style={styles.formaPagto} source={require('../../assets/images/cartao.png')} />}

                                    <Text style={item.tipo == "Venda" ? styles.txtVenda : styles.txtCompra}>R$ {(item.valor).toFixed(2)}</Text>
                                    <Text style={{color: "#FFF"}}>{item.dia}/{item.mes}/{item.ano}</Text>
                                </View>
                            </View>
                        )}
                    />
                }
            </View>
        </View>
    )
}