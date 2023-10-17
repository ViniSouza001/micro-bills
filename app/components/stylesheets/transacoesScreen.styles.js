import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    txt: {
        color: 'white',
    },
    img: {
        width: 15,
    },
    imgL: {
        width: 30,
    },
    verde: {
        color: "#35912E",
        fontSize: 25,
    },
    container: {
        height: '80%',
        flexDirection: 'column',
        alignItems: "center",
        gap: 10
    },
    card: {
        color: "#FFF",
        width: '90%',
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: "#FFF",
        borderBottomWidth: 1,
        borderTopColor: "#FFF",
        borderTopWidth: 1,
        borderLeftColor: "#FFF",
        borderLeftWidth: 1,
        borderRightColor: "#FFF",
        borderRightWidth: 1,
        alignSelf: 'center',
        justifyContent: 'space-between',
        padding: 10,
        marginTop: 10
    },
    precoArea: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    valorArea: {
        alignItems: 'center'
    },
    txtCompra: {
        color: "#912E2E",
        fontSize: 18
    },
    txtVenda: {
        color: "#35912E",
        fontSize: 18
    }

})

export default styles