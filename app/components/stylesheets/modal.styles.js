import React from "react";
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    fundoPreto: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        flexDirection: 'column',
        backgroundColor: '#FFF',
        width: '90%',
        height: '50%',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 20,
        paddingBottom: 20,
    },
    inputArea: {
        width: '70%',
    },
    bordas: {
        borderBottomColor: "#000",
        borderBottomWidth: 1,
        borderTopColor: "#000",
        borderTopWidth: 1,
        borderLeftColor: "#000",
        borderLeftWidth: 1,
        borderRightColor: "#000",
        borderRightWidth: 1,
    },
    textInput: {
        width: '100%',
        alignSelf: 'center',
        textAlign: 'center',
    }
})

export default styles