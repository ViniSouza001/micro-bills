import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    diario: {
        width: '80%',
        borderRadius: 50,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-around',
        flexDirection: 'column',
        height: '80%',
    },
    hoje: {

        color: "white",
        backgroundColor: "#000000", opacity: 0.8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%'
    },
    text: {
        color: "white",
        fontWeight: 'bold',
        fontSize: 20
    },
    seta: {
        width: 18,
        height: 30,
        margin: 5
    },
    cards: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '90%',
    },

    card: {
        alignItems:'center',
        justifyContent: 'center',
        padding:10,
        borderRadius:15,
        gap: 20
    },
    divPix: {
        backgroundColor: "#00BDAE33"
    },
    cartao: {
        backgroundColor:'#0D7BDA4D'
    },
    dinheiro: {
        backgroundColor:'#23C8004D'
    },
    txtPix:{
        color:'#00BDAE',
        fontSize: 15
    },
    txtNumberVendas:{
        color:'#000',
        fontSize:17
    },
    txtVendas:{
        color:'#000',
        fontSize:16
    },
    totalDeVendas:{
        width:'80%',
        height:'10%',
        backgroundColor:'#D9D9D9',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 30
    },
})

export default styles