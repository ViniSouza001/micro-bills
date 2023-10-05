import React from "react";
import { View, Text } from "react-native";
import global from "../stylesheets/global.styles";
import Footer from "./Footer/Footer";

function Perfil() {
    return (
        <View style={global.escuro}>
            <Text style={{ color: "#FFF" }}>Página de perfil</Text>
            <Footer semPerfil={true} />
        </View>
    )
}

export default Perfil