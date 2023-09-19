import React, { useState } from "react"
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native"
import styles from '../stylesheets/homeScreen.styles'
import global from '../stylesheets/global.styles'
import { Ionicons } from '@expo/vector-icons'
import ButtonForm from "../ButtonForm"

function HomeScreen () {

    const [input, setInput] = useState('')

    const login = () => {
        console.log("login")
    }

    return (
        <View style={[global.container, global.escuro]}>
            <Image source={require('../../assets/images/logo.png')} style={global.logo} />
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
                <TouchableOpacity style={styles.mt15}>
                    <Text style={styles.azul}>Criar conta</Text>
                </TouchableOpacity>
                <ButtonForm text="Entrar" handleOnPress={login} />
            </View>
        </View>
    )
}

export default HomeScreen