import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fundoPreto: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    flexDirection: "column",
    backgroundColor: "#FFF",
    width: "90%",
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingTop: 20,
    paddingBottom: 10,
  },
  inputArea: {
    width: "70%",
  },
  mt: {
    marginTop: 20,
  },
  bordas: {
    borderBottomColor: "#000",
    borderBottomWidth: 1,
    borderTopColor: "#000",
    borderTopWidth: 1,
    borderLeftColor: "#000",
    borderLeftWidth: 1,
    borderRightColor: "#000",
    borderRightWidth: 1,
    borderRadius: 5,
  },
  vwSelect: {
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "100%",
    alignSelf: "center",
    textAlign: "center",
  },
  viewButton: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
  },
  button: {
    width: "50%",
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "flex-start",
  },
  label: {
    fontSize: 15,
    marginBottom: 5,
  },
  columnButton: {
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
  },
});

export default styles;
