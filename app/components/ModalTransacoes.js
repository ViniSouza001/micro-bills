import React from 'react'
import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import styles from './stylesheets/modal.styles'
import ButtonForm from './Screens/login/ButtonForm'

function Modal () {
    return (
        <View style={styles.fundoPreto}>
            <View style={styles.modal}>
                <View style={styles.inputArea}>
                    <Text>Item:</Text>
                    <TextInput
                        style={[styles.textInput, styles.bordas]}
                    />
                </View>
                <View style={{ gap: 30, flexDirection: 'row' }}>
                    <View>
                        <Text>Quantidade</Text>
                        <TextInput
                            keyboardType='numeric'
                            style={[styles.textInput, styles.bordas]}
                        />
                    </View>
                    <View>
                        <Text>Valor</Text>
                        <TextInput
                            style={[styles.textInput, styles.bordas]}
                        />
                    </View>
                </View>
                <View style={styles.inputArea}>
                    <Text>Forma de Pagamento:</Text>
                </View>
                <View style={{ flexDirection: 'column' }}>
                    <Text>Compra</Text>
                    <Text>Venda</Text>
                </View>
                <ButtonForm
                    text={"Adicionar"}
                    key={"Adicionar"}
                />
            </View>
        </View>
    )
}

export default Modal