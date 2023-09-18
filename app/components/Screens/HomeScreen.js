import React, { useState } from "react"
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native"
import styles from '../stylesheets/homeScreen.styles'
import global from '../stylesheets/global.styles'
import { Ionicons } from '@expo/vector-icons'

function HomeScreen() {


    const [input, setInput] = useState('')
    const [revelar, setRevelar] = useState(true)

    return (
        <View style={[global.container, global.escuro]}>
            <View style={styles.form}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Usuario</Text>
                    <TextInput style={styles.input} placeholder="Digite seu e-mail" />
                </View>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>Senha</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Insira sua senha"
                        value={input}
                        onChangeText={(texto) => setInput(texto)}
                        secureTextEntry={true}
                    />
                </View>
                <Text style={styles.azul}>Criar conta</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.txtButton}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen