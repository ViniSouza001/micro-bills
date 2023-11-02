import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import global from "../stylesheets/global.styles";
import styles from '../stylesheets/perfil.styles.js'
import Input from "./login/Input";

function Perfil ({ route }) {

    const { usuarioId } = route.params
    const [usuario, setUsuario] = useState({})
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [dataEscolhida, setDataEscolhida] = useState(null)


    useEffect(() => {
        console.log("Pagina de perfil")
        infoUsuarios()
    }, [])

    const infoUsuarios = async () => {
        const response = await fetch('http://192.168.0.106:3000/infoUsuario', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ usuarioId })
        })

        const data = await response.json()
        setUsuario(data.usuario)
        setSelectedDate(data.usuario.nascimento)
        console.log(usuario)
    }

    return (
        <View style={[global.escuro, global.container]}>
            <Image source={require('../../assets/images/perfil2.png')} style={styles.img} />
            <View style={styles.modal}>
                <Text style={{ fontSize: 25 }}>Perfil</Text>
                <View style={styles.form}>
                    <View style={styles.inputArea}>
                        <Input
                            label={"Nome completo"}
                            value={usuario.nome}
                            key={usuario.nome}
                        />
                    </View>
                    <View style={styles.nascimentoArea}>
                        <Text>Data de nascimento</Text>
                        <TouchableOpacity style={styles.btnNasc}>
                            <Text>
                                {usuario.nascimento ? (
                                    (usuario.nascimento).slice(0, 10)
                                ) : (
                                    'dd/mm/aaaa'
                                )
                                }
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.inputArea}>
                        <Text style={styles.label}>Email</Text>
                        <View style={styles.row}>
                            <Text style={styles.input}>{usuario.email}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Perfil