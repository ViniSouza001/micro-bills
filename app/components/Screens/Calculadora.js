import React from "react";
import { View, Text, Image, TextInput } from "react-native";
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/Calculadora.styles";
function CalculadoraScreen() {
  return (
    <View style={[global.escuro, global.container]}>
      <View style={styles.modal}>
        <Image
          source={require("../../assets/images/calculadora.png")}
          style={styles.img}
        />
        <View style={styles.content}>
          <View style={styles.inputContainer}>
            <Text style={styles.texto}>Custo do produto (Unitário)</Text>
            <TextInput keyboardType="number-pad" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.texto}>% de lucro desejado</Text>
            <TextInput keyboardType="number-pad" style={styles.input} />
          </View>
        </View>
      </View>
    </View>
  );
}

export default CalculadoraScreen;
