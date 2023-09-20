import React, { StrictMode, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native"
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/homeScreen.styles"
import Input from "./login/Input";
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesome5 } from '@expo/vector-icons';
import ButtonForm from './login/ButtonForm'

function CriarConta({ navigation }) {

    const [nome, setNome] = useState('')
    const [nascimento, setNascimento] = useState(0)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);

    const handleDateChange = (event, date) => {
        if (date) {
            setSelectedDate(date);
            console.log(selectedDate)
            setShowDatePicker(false);
        }
    };

    const criarConta = () => {

        fetch('http://localhost:8081/cadastro')
        console.log('conta criada')
    }

    const openDatePicker = () => {
        setShowDatePicker(true);
    };

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
                    <View style={styles.nascimentoArea}>
                        <Text>Dt. Nascimento</Text>
                        <TouchableOpacity onPress={openDatePicker} style={styles.btnNasc}>
                            <Text>dd/mm/aaaa</Text>
                            <FontAwesome5 name="calendar-alt" size={20} color="black" />
                        </TouchableOpacity>
                        {showDatePicker && (
                            <DateTimePicker
                                value={selectedDate}
                                mode="date"
                                display="default"
                                onChange={handleDateChange}
                            />
                        )}
                    </View>
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
                <ButtonForm
                    text={"Criar conta"}
                    handleOnPress={criarConta}
                />
            </View>
        </View>
    );
}


export default CriarConta