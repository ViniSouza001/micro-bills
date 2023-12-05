import { StyleSheet } from "react-native";

const global = StyleSheet.create({
  container: {
    flex: 1,
    width: "100vw",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  escuro: {
    backgroundColor: "rgb(2, 20, 34)",
    color: "#FFFFFF",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  claro: {
    backgroundColor: "rgb(255, 255, 255)",
    color: "#000000",
  },
  logo: {
    width: 120,
    height: 120,
    marginTop: 20,
  },
  main: {
    width: "100%",
    height: "80%",
  },
  loading: {
    width: 150,
    height: 120,
  },
  loadingView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});

export default global;
