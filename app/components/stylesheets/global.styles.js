import { StyleSheet } from "react-native";

const global = StyleSheet.create({
    container: {
        flex: 1,
        width: '100vw',
        height: '100vh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    escuro: {
        backgroundColor: 'rgb(2, 20, 34)',
        color: "#FFFFFF"
    },
    claro: {
        backgroundColor: 'rgb(255, 255, 255)',
        color: "#000000"
    }
})

export default global