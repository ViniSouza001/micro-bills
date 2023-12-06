import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    marginTop: 20,
    alignItems: "center",
  },
  img: {
    width: 100,
    height: 100,
  },
  texto: {
    color: "#000",
    fontSize: 18,
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  input: {
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    borderTopColor: "#000",
    borderTopWidth: 2,
    borderRightColor: "#000",
    borderRightWidth: 2,
    borderLeftColor: "#000",
    borderLeftWidth: 2,
    borderRadius: 10,
    textAlign: "center",
    width: 200,
    height: 30,
    alignSelf: "center",
    margin: "auto",
    marginTop: 5,
    alignItems: "center",
  },
  resultado: {
    fontSize: 15,
  },
});

export default styles;
