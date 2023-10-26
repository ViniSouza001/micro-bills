import React from 'react'
import {View, Text, TouchableOpacity, TextInput} from 'react-native'
import styles from './stylesheets/modal.styles'

function Modal () {
    return (
        <View style={styles.fundoPreto}>
            <View style={styles.modal}>
                <View style={styles.inputArea}>
                    <Text>Item:</Text>
                    <TextInput
                        style={[ styles.textInput, styles.bordas ]}
                    />
                </View>
                <View style={styles.inputArea}>
                    <Text>Forma de Pagamento:</Text>
                </View>
            </View>
        </View>
    )
}

export default Modal