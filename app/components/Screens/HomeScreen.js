import React, { useState } from "react"
import { View, TouchableOpacity, Text, Image, TextInput } from "react-native"
import styles from '../stylesheets/homeScreen.styles'
import global from '../stylesheets/global.styles'
import { Ionicons } from '@expo/vector-icons'
import ButtonForm from "../ButtonForm"

function HomeScreen({ navigation }) {

    const [input, setInput] = useState('')
    const [revelar, setRevelar] = useState(false)

    const login = () => {
        console.log("login")
    }

    return (
        <View style={[global.escuro, styles.bodyContainer]}>
            <Image source={require('../../assets/images/logo.png')} style={global.logo} />
            <View style={styles.form}>
                <View style={styles.formContainer}>
                    <Text style={styles.label}>E-mail</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite seu e-mail"
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeScreen