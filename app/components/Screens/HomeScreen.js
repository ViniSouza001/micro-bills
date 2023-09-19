import React, { useState } from "react"
import { View, TouchableOpacity, Text, Image, TextInput, KeyboardAvoidingView, Platform } from "react-native"
import styles from '../stylesheets/homeScreen.styles'
import global from '../stylesheets/global.styles'
import { Ionicons } from '@expo/vector-icons'
import ButtonForm from "./login/ButtonForm"
import Input from './login/Input'

function HomeScreen({ navigation }) {

    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [revelar, setRevelar] = useState(false)

    const login = () => {
        console.log("login")
    }

    const criarConta = () => {
        navigation.navigate('Criar conta')
        console.log('criar conta')
    }

    return (
        <View style={[global.escuro, styles.bodyContainer]}>
            <Image source={require('../../assets/images/logo.png')} style={global.logo} />
            <View style={styles.form}>
                <View style={styles.formContainer}>
                    <Input
                        label="E-mail"
                        handleChangeText={setEmail}
                        value={email}
                        placeholder="Digite seu email"
                        secureTextEntry={false}
                    />
                    <Input
                        label="Senha"
                        handleChangeText={setSenha}
                        value={senha}
                        placeholder="Digite sua senha"
                        secureTextEntry={revelar ? false : true}
                        isPassword={true}
                        revelar={revelar}
                        setRevelar={setRevelar}
                    />
                </View>
                <TouchableOpacity onPress={criarConta}>
                    <Text style={styles.azul}>Criar conta</Text>
                </TouchableOpacity>
                <ButtonForm
                    text={"Entrar"}
                    key={"Entrar"}
                    handleOnPress={login}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Um rodapé"
                    placeholderTextColor={"#fff"}
                />
            </View>
        </View>
    )
}

export default HomeScreen