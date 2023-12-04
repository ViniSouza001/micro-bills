import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  diario: {
    width: "80%",
    borderRadius: 50,
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    height: "80%",
  },
  periodo: {
    color: "white",
    backgroundColor: "#000000",
    opacity: 0.8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    borderRadius: 30,
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    borderRadius: 20,
  },
  setaE: {
    width: 18,
    height: 30,
    marginLeft: 10,
  },
  setaD: {
    width: 18,
    height: 30,
    marginRight: 10,
  },
  cards: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginTop: 10,
  },

  card: {
    alignItems: "center",
    justifyContent: "center",
    width: 80,
    padding: 10,
    borderRadius: 15,
    gap: 10,
  },
  divPix: {
    backgroundColor: "#00BDAE33",
  },
  cartao: {
    backgroundColor: "#0D7BDA4D",
  },
  dinheiro: {
    backgroundColor: "#23C8004D",
  },
  txtPix: {
    color: "#00BDAE",
    fontSize: 15,
  },
  txtCartao: {
    color: "#0D7BDA",
  },
  txtDinheiro: {
    color: "#23C800",
  },
  txtNumberVendas: {
    color: "#000",
    fontSize: 17,
  },
  txtVendas: {
    color: "#000",
    fontSize: 16,
  },
  totalDeVendas: {
    width: "80%",
    height: "10%",
    backgroundColor: "#D9D9D9",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  grafico: {
    alignItems: "center",
  },
  faturaTotal: {
    color: "#fff",
    fontSize: 23,
  },
  total: {
    color: "#fff",
    fontSize: 23,
  },
});

export default styles;
