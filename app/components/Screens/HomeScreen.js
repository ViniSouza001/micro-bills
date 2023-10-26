import React, {useEffect, useState} from "react"
import Header from '../Screens/Header/Header.js'
import Footer from '../Screens/Footer/Footer.js'
import {View, Text, Image} from "react-native"
import {useFocusEffect} from '@react-navigation/native'
import global from "../stylesheets/global.styles.js"
import styles from '../stylesheets/homeScreen.styles.js'
import PieChart from 'react-native-pie-chart'


function HomeScreen ({route}) {
    const [ totalDinheiro, setTotalDinheiro ] = useState(0)
    const [ totalCartao, setTotalCartao ] = useState(0)
    const [ totalPix, setTotalPix ] = useState(0)
    const [ totalVendas, setTotalVendas ] = useState(0)
    const [ totalValoresVendas, setTotalValoresVendas ] = useState(0)
    const [ dataGrafico, setDataGrafico ] = useState([])
    const [ fetchFeito, setFetchFeito ] = useState(false)

    // grafico
    const widthAndHeight = 250
    const sliceColor = [ '#00BDAE', '#0D7BDA', '#23C800' ]

    // grafico vazio
    const sliceGrayColor = [ "#5F5F5F" ]
    const infoVazio = [ 1 ]

    const {usuarioId} = route.params

    useFocusEffect(
        React.useCallback(() => {
            setFetchFeito(false)
            const fetchValores = async () => {
                const body = {usuarioId};
                try {
                    const response = await fetch('http://10.87.207.10:3000/infoVendas', {
                        method: "POST",
                        headers: {"Content-Type": "application/json"},
                        body: JSON.stringify(body)
                    });

                    const data = await response.json();
                    const {valorTotalCartao, valorTotalDinheiro, valorTotalPix, valorTotal} = data.valores;
                    const valores = [ valorTotalPix, valorTotalCartao, valorTotalDinheiro ];

                    // inserção valores
                    setTotalCartao(valorTotalCartao);
                    setTotalDinheiro(valorTotalDinheiro);
                    setTotalPix(valorTotalPix);
                    setTotalVendas(data.transacoes.length);
                    setTotalValoresVendas(valorTotal);
                    setDataGrafico(valores);
                } catch(error) {
                    return 0
                } finally {
                    setFetchFeito(true)
                }
            };

            fetchValores();
        }, [ usuarioId ])
    );

    return (
        <View style={global.escuro}>
            {!fetchFeito ? (
                <View style={global.loadingView}>
                    <Image style={global.loading} source={require('../../assets/images/loading.gif')} />
                </View>
            ) : (
                <>
                    <Header />
                    <View style={[ styles.diario, global.main ]}>
                        <View style={styles.hoje}>
                            <Image style={styles.setaE} source={require('../../assets/images/seta_esquerda.png')} />
                            <Text style={styles.text}>Hoje</Text>
                            <Image style={styles.setaD} source={require('../../assets/images/seta_direita.png')} />
                        </View>
                        <View style={styles.grafico}>
                            {dataGrafico.length !== 0 ?
                                <PieChart
                                    style={{zIndex: 0}}
                                    widthAndHeight={widthAndHeight}
                                    series={dataGrafico}
                                    sliceColor={sliceColor}
                                    coverRadius={0.75}
                                    coverFill={'transparent'}
                                /> :
                                <PieChart
                                    style={{zIndex: 0}}
                                    widthAndHeight={widthAndHeight}
                                    series={infoVazio}
                                    sliceColor={sliceGrayColor}
                                    coverRadius={0.75}
                                    coverFill={'transparent'}
                                />
                            }
                            <View style={{zIndex: 1, alignItems: 'center', position: 'absolute', marginTop: 65}}>
                                <Text style={styles.faturaTotal}>Faturamento</Text>
                                <Text style={styles.total}>Total</Text>
                                <Text style={styles.faturaTotal}>R$ {(totalValoresVendas).toFixed(2)}</Text>
                                <Text style={styles.resumo}>Ver Resumo</Text>
                            </View>
                        </View>
                        <View style={styles.cards}>
                            <View style={[ styles.card, styles.divPix ]}>
                                <Image source={require('../../assets/images/pix.png')} />
                                <Text style={styles.txtPix}>R${(totalPix).toFixed(2)}</Text>
                            </View>
                            <View style={[ styles.card, styles.cartao ]}>
                                <Image source={require('../../assets/images/cartao.png')} />
                                <Text style={styles.txtCartao}>R$ {(totalCartao).toFixed(2)}</Text>
                            </View>
                            <View style={[ styles.card, styles.dinheiro ]}>
                                <Image source={require('../../assets/images/money.png')} />
                                <Text style={styles.txtDinheiro}>R$ {(totalDinheiro).toFixed(2)}</Text>
                            </View>
                        </View>
                        <View style={styles.totalDeVendas}>
                            <Text style={styles.txtVendas}>Total De Vendas</Text>
                            <Text style={styles.txtNumberVendas}>{totalVendas}</Text>
                        </View>
                        <Image />
                    </View>
                    <Footer usuarioId={usuarioId} showPerfilButton={true} />
                </>
            )}
        </View>

    )
}

export default HomeScreen