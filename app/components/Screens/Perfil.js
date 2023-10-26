import React, { useState, useEffect } from "react";
import { View, Text, Image, TextInput } from "react-native";
import global from "../stylesheets/global.styles";
import styles from '../stylesheets/perfil.styles.js'
import Input from "./login/Input";

function Perfil ({ route }) {

    // const { usuarioId } = route.params
    useEffect(() => {
        console.log("Pagina de perfil")
    })

    return (
        <View style={[global.escuro, global.container]}>
            <Image source={require('../../assets/images/perfil2.png')} style={styles.img} />
            <View style={styles.modal}>
                <Text style={{ fontSize: 25 }}>Perfil</Text>
                <View style={styles.form}>
                    <View style={styles.inputArea}>
                        <Input
                            label={"Nome completo"}
                            value={"nome"}
                            key={"nome"}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Perfil