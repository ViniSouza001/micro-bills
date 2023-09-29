import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import { Keyboard } from 'react-native';
import styles from '../stylesheets/LoginScreen.styles'
import global from '../stylesheets/global.styles'
import ButtonForm from "./login/ButtonForm"
import Input from './login/Input'
import fetchLogin from "../lib/login";
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"

function LoginScreen ({ navigation }) {
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [mensagem, setMensagem] = useState('')
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
            const response = await fetch("http://192.168.0.107:8081/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })

            const data = await response.json()
            console.log(data)
            if (data.success) {
                showFlashMessage("Login realizado com sucesso", "success")
                setTimeout(() => {
                    navigation.navigate("Home")
                }, 1000);
            } else {
                showFlashMessage("Credenciais incorretas", "danger")
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
            <FlashMessage
                position={"top"}
                color="#FFF"
            />
            <TouchableOpacity onPress={() => { showFlashMessage("Uma mensagem de teste", "danger") }}>
                <Text style={styles.azul}>Clique aqui</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LoginScreen