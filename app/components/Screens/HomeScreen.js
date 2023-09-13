import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import { useEffect } from "react";
import fetch from "../lib/fetch"

function HomeScreen() {
    const [retornoTeste, setRetornoTeste] = useState('Sem resposta')

    useEffect(() => {
        async function recebeFetch() {
            setRetornoTeste(await fetch())
        }
        recebeFetch()
    }, [])

    return (
        <View>
            <Text>{retornoTeste}</Text>
        </View>
    )
}

export default HomeScreen