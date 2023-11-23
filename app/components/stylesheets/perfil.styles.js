import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    width: "90%",
    height: "65%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  img: {
    width: 150,
    height: 150,
  },
  label: {
    fontSize: 25,
  },
  inputArea: {
    width: "100%",
    gap: 5,
    flexDirection: "column",
  },
  nascimentoArea: {
    marginTop: 10,
  },
  btnNasc: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    borderRadius: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    borderTopColor: "#000",
    borderTopWidth: 2,
    borderRightColor: "#000",
    borderRightWidth: 2,
    borderLeftColor: "#000",
    borderLeftWidth: 2,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    padding: 5,
    width: 100,
    justifyContent: "center",
  },
  row: {
    width: "80%",
    alignSelf: "center",
    paddingRight: 15,
    margin: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    borderRadius: 5,
    borderBottomColor: "#000",
    borderBottomWidth: 2,
    borderTopColor: "#000",
    borderTopWidth: 2,
    borderRightColor: "#000",
    borderRightWidth: 2,
    borderLeftColor: "#000",
    borderLeftWidth: 2,
    shadowRadius: 3,
  },
  input: {
    width: "100%",
  },
});

export default styles;
