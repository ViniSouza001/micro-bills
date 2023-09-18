import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    form: {
        backgroundColor: "#FFFFFF",
        width: '70vw',
        height: '70vh',
        alignSelf: 'center',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },
    label: {
        fontSize: 25,
    },
    inputArea: {
        flexDirection: "row",
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    formContainer: {
        width: '100%',
        paddingLeft: '35px',
        paddingRight: '35px',
        margin: 10
    },
    input: {
        borderRadius: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderTopColor: '#000',
        borderTopWidth: 2,
        borderRightColor: '#000',
        borderRightWidth: 2,
        borderLeftColor: '#000',
        borderLeftWidth: 2,
        width: '100%',
        height: 50,
        textAlign: 'center',
        fontSize: 14,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 3

    },
    azul: {
        color: "rgba(13, 123, 218, 0.45)",
        fontSize: 14
    }
})

export default styles