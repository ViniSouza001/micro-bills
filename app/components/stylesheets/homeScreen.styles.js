import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    form: {
        backgroundColor: "#FFFFFF",
        width: '100%',
        alignSelf: 'center',
        margin: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    },
    bodyContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-evenly'
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
        margin: 10,
        padding: 20,
        alignItems: 'center',
        gap: 20,
        justifyContent: 'center',
    },
    input: {
        width: '85%',
        height: 50,
        textAlign: 'center',
        fontSize: 14,

    },
    azul: {
        color: "rgba(13, 123, 218, 0.45)",
        fontSize: 14,
        fontWeight: 'bold'
    },
    mt15: {
        marginTop: 15
    },
    button: {
        width: 100,
        padding: 10,
        paddingLeft: 15,
        paddingRight: 15,
        backgroundColor: "#000000",
        alignItems: "center",
        borderRadius: 1000,
        margin: 10
    },
    txtButton: {
        color: "#FFFFFF",
        fontSize: 17
    },
    divInput: {
        alignSelf: 'center',
        width: '75%',
    },
    row: {
        width: '100%',
        alignSelf: 'center',
        margin: "auto",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 10,
        borderRadius: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        borderTopColor: '#000',
        borderTopWidth: 2,
        borderRightColor: '#000',
        borderRightWidth: 2,
        borderLeftColor: '#000',
        borderLeftWidth: 2,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity: 1,
        shadowOffset: { width: 4, height: 4 },
        shadowRadius: 3,
    },
    icon: {
        width: '15%',
    }
})

export default styles