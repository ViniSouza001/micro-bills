import React, { StrictMode, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/homeScreen.styles"
import Input from "./login/Input";
import DateTimePicker from '@react-native-community/datetimepicker';

function CriarConta({ navigation }) {

    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState(0)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    // const [selectedDate, setSelectedDate] = useState(new Date());
    // const [showDatePicker, setShowDatePicker] = useState(false);


    return (
        <View style={[global.escuro, styles.bodyContainer]}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={global.logo}
            />
            <View style={styles.form}>
                <View style={styles.formContainer}>
                    <Input
                        label="Nome Completo"
                        handleChangeText={setNome}
                        value={nome}
                        secureTextEntry={false}
                    />
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
                        isPassword={true}
                    />
                    <Input
                        label="Repetir Senha"
                        handleChangeText={setConfirmarSenha}
                        value={confirmarSenha}
                        isPassword={true}
                    />
                </View>
            </View>
        </View>
    )
}


export default CriarConta