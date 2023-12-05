import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: {
    width: "90%",
    height: "60%",
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "scroll",
  },
  img: {
    width: 120,
    height: 120,
  },
  label: {
    fontSize: 23,
  },
  form: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 20,
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
