import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import { Keyboard } from 'react-native';
import styles from '../stylesheets/homeScreen.styles'
import global from '../stylesheets/global.styles'
import ButtonForm from "./login/ButtonForm"
import Input from './login/Input'

function LoginScreen({ navigation }) {
 
    const [senha, setSenha] = useState('')
    const [email, setEmail] = useState('')
    const [revelar, setRevelar] = useState(false)
    const [mostrarImagem, setMostrarImagem] = useState(true)
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

    const login = () => {
        navigation.navigate('Home')
    }

    const criarConta = () => {
        navigation.navigate('Criar conta')
        console.log('criar conta')
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
        </View>
    )
}

export default LoginScreen