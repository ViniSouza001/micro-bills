import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import { Keyboard } from 'react-native';
import styles from '../stylesheets/LoginScreen.styles'
import global from '../stylesheets/global.styles'
import ButtonForm from "./login/ButtonForm"
import Input from './login/Input'
import fetchLogin from "../lib/login";
import { showMessage } from 'react-native-flash-message'

function LoginScreen ({ navigation }) {
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [revelar, setRevelar] = useState(false)
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true); // O teclado está visível
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false); // O teclado está oculto
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const showFlashMessage = (message, typeMessage) => {
        return (
            showMessage({
                message: message || "A mensagem está vazia",
                type: typeMessage || "default",
            })
        )
    }

    const login = async () => {
        var usuario
        console.log(email)
        console.log(senha)
        const body = { email, senha }
        try {
            const response = await fetch("http://192.168.0.107:3000/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            const data = await response.json()
            console.log()
            if (data.success) {
                showFlashMessage("Login realizado com sucesso", "success")
                setTimeout(() => {
                    navigation.navigate("Home")
                }, 500);
            } else {
                showFlashMessage(data.message.message, "danger")
            }
        } catch (error) {
            console.log("Erro durante o login: " + error)
        }
    }

    const criarConta = () => {
        navigation.navigate('Criar conta')
    }

    return (
        <View style={[global.escuro, styles.bodyContainer]}>
            {!isKeyboardVisible && <Image source={require('../../assets/images/logo.png')} style={global.logo} />}
            <View style={styles.form}>
                <View style={styles.formContainer}>
                    <Input
                        label="E-mail"
                        handleChangeText={setEmail}
                        value={email}
                        secureTextEntry={false}
                    />
                    <Input
                        label="Senha"
                        handleChangeText={setSenha}
                        value={senha}
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
            </View>
            {/* <TouchableOpacity onPress={() => { showFlashMessage("Apenas um show", "success") }}>
                <Text style={styles.azul}>Clique aqui</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default LoginScreen