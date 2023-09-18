import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native"
import { useEffect } from "react";
import fetch from "../lib/fetch"

function TesteScreen() {

    const [dados, setDados] = useState('')

    // useEffect(() => {
    //     const getFetch = async () => {
    //         const response = await fetch()
    //         setDados(response)
    //     }
    //     getFetch()
    // })

    return (
        <View>
            {/* <Text>{dados}</Text> */}
        </View>
    )
}

export default TesteScreen