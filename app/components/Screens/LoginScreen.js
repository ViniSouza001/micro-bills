import React, { useState, useEffect } from "react"
import { View, TouchableOpacity, Text, Image } from "react-native"
import { Keyboard } from 'react-native';
import styles from '../stylesheets/LoginScreen.styles'
import global from '../stylesheets/global.styles'
import ButtonForm from "./login/ButtonForm"
import Input from './login/Input'
import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"
 
function LoginScreen({ navigation, message, typeMessage }) {
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

    const login = () => {

        navigation.navigate('Home')

        navigation.navigate('Home');
        console.log("login")
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
            {/* <FlashMessage
                position={"top"}

                message="Alo testandoo"
                color="#FFF"
            /> */}
            {message && (
                showMessage({
                    message: message,
                    type: typeMessage
                })
            )}
            {/* <TouchableOpacity onPress={() => {
                showMessage({
                    message: "Simple message",
                    type: "success",
                })
            }}
            >
                <Text style={styles.azul}>Clique aqui</Text>
            </TouchableOpacity> */}
        </View>
    )
}

export default LoginScreen