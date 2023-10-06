import React from "react";
import { View, Text } from "react-native";
import global from "../stylesheets/global.styles";
function CalculadoraScreen() {
    return (
        <View style={global.escuro}>
            <Text style={{ color: "#FFF" }}>Página da calculadora</Text>
        </View>
    )
}

export default CalculadoraScreen