import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import { useEffect } from "react";
import fetch from "../lib/fetch"
// import FlashMessage, { showMessage, hideMessage } from "react-native-flash-message"


function TesteScreen ({ navigation }) {

    // const [dados, setDados] = useState('')

    // useEffect(() => {
    //     const getFetch = async () => {
    //         const response = await fetch()
    //         setDados(response)
    //     }
    //     getFetch()
    // })

    // const showFlashMessage = (message, typeMessage) => {
    //     return (
    //         showMessage({
    //             message: message || "A mensagem está vazia",
    //             type: typeMessage || "default",
    //         })
    //     )
    // }

    const trocarTela = () => {
        navigation.navigate("Pagina login")
    }

    return (
        <View>
            <Text>Esta é a página teste</Text>
            {/* <Text>{dados}</Text> */}
            <TouchableOpacity>
                <Text>Mensagem teste</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => trocarTela()}>
                <Text>Trocar tela</Text>
            </TouchableOpacity>

        </View>
    )
}

export default TesteScreen