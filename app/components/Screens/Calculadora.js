import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { showMessage } from "react-native-flash-message";
import global from "../stylesheets/global.styles";
import styles from "../stylesheets/Calculadora.styles";
import ButtonForm from "./login/ButtonForm";
function CalculadoraScreen() {
  const [custoProduto, setCustoProduto] = useState(0);
  const [lucroDesejado, setLucroDesejado] = useState(0);
  const [valorSugerido, setValorSugerido] = useState();

  const calcular = () => {
    if (custoProduto == 0 || lucroDesejado == 0) {
      showFlashMessage("Preencha todos os campos", "danger");
    } else {
      const acrescimo = custoProduto * (lucroDesejado / 100);
      setValorSugerido(Number(acrescimo) + Number(custoProduto));
    }
  };

  const showFlashMessage = (message, typeMessage) => {
    return showMessage({
      message: message || "A mensagem está vazia",
      type: typeMessage || "default",
    });
  };

  return (
    <View style={[global.escuro, global.container]}>
      <View style={styles.modal}>
        <Image
          source={require("../../assets/images/calculadora.png")}
          style={styles.img}
        />
        <KeyboardAvoidingView>
          <View style={styles.content}>
            <View style={styles.inputContainer}>
              <Text style={styles.texto}>Custo do produto (unitário)</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={(value) => {
                  setCustoProduto(value);
                }}
              />
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.texto}>Lucro desejado (%)</Text>
              <TextInput
                keyboardType="number-pad"
                style={styles.input}
                onChangeText={(value) => {
                  setLucroDesejado(value);
                }}
              />
            </View>
          </View>
          <View style={{ marginTop: 25 }}>
            <View style={styles.inputContainer}>
              <Text style={styles.texto}>Valor sugerido para</Text>
              <Text style={styles.texto}>o produto (unitário)</Text>
              <View style={styles.input}>
                {valorSugerido && (
                  <Text style={styles.resultado}>
                    R$ {valorSugerido.toFixed(2)}
                  </Text>
                )}
              </View>
            </View>
          </View>
          <ButtonForm text={"Calcular"} handleOnPress={calcular} />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

export default CalculadoraScreen;
