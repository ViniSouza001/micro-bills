import React from "react";
import { View, Text } from "react-native";
import global from "../stylesheets/global.styles";
import Footer from "./Footer/Footer";
function CalculadoraScreen() {
    return (
        <View style={global.escuro}>
            <Text style={{ color: "#FFF" }}>Página da calculadora</Text>
            <Footer semCalculadora={true} />
        </View>
    )
}

export default CalculadoraScreen