import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import styles from './stylesheets/modal.styles'
import ButtonForm from './Screens/login/ButtonForm'
import {Picker as Selector} from '@react-native-picker/picker'

function Modal ({modalVisible, setModalVisible, usuarioId}) {
    const [ formaPagto, setFormaPagto ] = useState('Selecione')
    const [ quantidade, setQuantidade ] = useState(0)
    const [ valorUnitario, setValorUnitario ] = useState(0)
    const [ tipo, setTipo ] = useState('')
    const [ item, setItem ] = useState('')

    const novaTransacao = async () => {
        fetch('http://10.87.207.13:3000/cadastrarTransacao', {
            method: "POST",
            "headers": {
                "Content-Type": "application/json"
            },
            body: {
                "usuarioId": usuarioId,
                "valorUnitario": valorUnitario,
                "item": item,
                "quantidade": quantidade,
                "tipo": tipo,
                "formaPagto": formaPagto
            }
        })
    }

    if(modalVisible) {
        return (
            <View style={styles.fundoPreto}>
                <View style={styles.modal}>
                    <View style={styles.inputArea}>
                        <Text>Item:</Text>
                        <TextInput
                            style={[ styles.textInput, styles.bordas ]}
                        />
                    </View>
                    <View style={{gap: 30, flexDirection: 'row'}}>
                        <View>
                            <Text>Quantidade</Text>
                            <TextInput
                                keyboardType='numeric'
                                style={[ styles.textInput, styles.bordas ]}
                            />
                        </View>
                        <View>
                            <Text>Valor</Text>
                            <TextInput
                                style={[ styles.textInput, styles.bordas ]}
                            />
                        </View>
                    </View>
                    <View style={styles.inputArea}>
                        <Text>Forma de Pagamento:</Text>
                        {modalVisible &&
                            <View style={[ styles.vwSelect, styles.bordas ]}>
                                <Selector style={{width: '100%', height: 40}}
                                    selectedValue={formaPagto}
                                    onValueChange={(item, indexItem) => {setFormaPagto(item)}}
                                >
                                    <Selector.Item
                                        key={0}
                                        value="Dinheiro"
                                        label='Dinheiro'
                                    />

                                    <Selector.Item
                                        key={1}
                                        value="Cartao"
                                        label='Cartão'
                                    />

                                    <Selector.Item
                                        key={2}
                                        value="Pix"
                                        label='Pix'
                                    />
                                </Selector>
                            </View>
                        }
                    </View>
                    <View style={{flexDirection: 'column'}}>
                        <Text style={styles.option}>Compra</Text>
                        <Text style={styles.option}>Venda</Text>
                    </View>
                    <View style={styles.viewButton}>
                        <ButtonForm
                            text={"Adicionar"}
                            key={"Adicionar"}
                        />
                        <ButtonForm
                            handleOnPress={() => setModalVisible(false)}
                            text={"Cancelar"}
                            key={"Cancelar"}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

export default Modal