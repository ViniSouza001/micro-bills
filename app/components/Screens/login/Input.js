import React from "react";
import { View, Text, TextInput } from "react-native";
import styles from "../../stylesheets/homeScreen.styles";
import { Ionicons } from '@expo/vector-icons'

function Input({ label, value, handleChangeText, placeholder, secureTextEntry, isPassword, revelar, setRevelar }) {

    return (
        <>
            <View style={styles.divInput}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.row}>
                    <TextInput
                        style={styles.input}
                        value={value}
                        onChangeText={(value) => handleChangeText(value)}
                        placeholder={placeholder}
                        placeholderTextColor="#000"
                        secureTextEntry={secureTextEntry}
                    />
                    {isPassword && <Ionicons
                        name={revelar ? "eye-off" : "eye"}
                        onPress={() => setRevelar((state) => !state)}
                        color="#000000"
                        size={25}
                        style={styles.icon}
                    />}
                </View>
            </View>
        </>
    )
}

export default Input