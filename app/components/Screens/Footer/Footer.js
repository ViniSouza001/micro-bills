import React from "react";
import { Image, StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

function Footer({ usuarioId, showPerfilButton }) {
  const navigation = useNavigation();
  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate("Perfil", { usuarioId });
        }}
      >
        <Image
          source={require("../../../assets/images/perfil.png")}
          style={styles.img}
        />
        <Text style={styles.txtLabel}>Perfil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate("Calculadora", { usuarioId });
        }}
      >
        <Image
          source={require("../../../assets/images/calculadora.png")}
          style={styles.img}
        />
        <Text style={styles.txtLabel}>Calculadora</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          navigation.navigate("Transacoes", { usuarioId });
        }}
      >
        <Image
          source={require("../../../assets/images/transacoes.png")}
          style={styles.img}
        />
        <Text style={styles.txtLabel}>Transacoes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    backgroundColor: "#021422",
    bottom: 0,
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 10,
  },
  icon: {
    alignItems: "center",
    justifyContent: "center",
    gap: 3,
    width: 80,
  },
  img: {
    width: 24,
    height: 24,
  },
  txtLabel: {
    color: "#FFF",
    fontSize: 12,
  },
});

export default Footer;
