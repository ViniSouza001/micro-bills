import React from "react";
import { View, Text } from "react-native";
import global from "../stylesheets/global.styles";

function Resumo() {
    return (
        <View style={global.escuro}>
            <Text style={{ color: "#FFF" }}>Página de Resumo</Text>
        </View>
    )
}

export default Resumo