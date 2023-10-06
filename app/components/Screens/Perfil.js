import React from "react";
import { View, Text } from "react-native";
import global from "../stylesheets/global.styles";

function Perfil() {
    return (
        <View style={global.escuro}>
            <Text style={{ color: "#FFF" }}>Página de perfil</Text>
        </View>
    )
}

export default Perfil