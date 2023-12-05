import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    width: "90%",
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#FFF",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    marginTop: 20,
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
    gap: 10,
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
    alignSelf: "center",
  },
});

export default styles;
