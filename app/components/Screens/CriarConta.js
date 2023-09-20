import React, { StrictMode, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/homeScreen.styles"
import Input from "./login/Input";
import DatePicker from 'react-native-datepicker';



function CriarConta({ navigation }) {

    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState(0)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    return (
        <View style={[global.escuro, styles.bodyContainer]}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={global.logo}
            />
            <View style={styles.form}>
                <View style={styles.formContainer}>
                    <Input
                        label={"Nome Completo"}
                        value={nome}
                        handleChangeText={setNome}
                        secureTextEntry={false}
                    />

                </View>
            </View>
        </View>
    )
}


export default CriarConta