import React, { useState } from "react"
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native"
import styles from '../stylesheets/homeScreen.styles'
import global from '../stylesheets/global.styles'
import { Ionicons } from '@expo/vector-icons'
import ButtonForm from "../ButtonForm"

function HomeScreen({ navigation }) {

    const [input, setInput] = useState('')
    const [revelar, setRevelar] = useState(false)

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
                    <View style={styles.inputArea}>
                        <TextInput
                            style={styles.input}
                            placeholder="Insira sua senha"
                            value={input}
                            onChangeText={(texto) => setInput(texto)}
                            secureTextEntry={revelar ? false : true}
                        />
                        <TouchableOpacity>
                            <Ionicons
                                name={revelar ? "eye-off" : "eye"}
                                color="#000000"
                                size={25}
                                onPress={() => setRevelar((state) => !state)}
                            />
                        </TouchableOpacity>
                    </View>
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