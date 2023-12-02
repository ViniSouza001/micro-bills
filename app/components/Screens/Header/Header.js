import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { StyleSheet } from "react-native";

function Header({ enviarMes, mesAtual, setMesAtual }) {
  const months = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const goToPreviousMonth = async () => {
    if (mesAtual > 0) {
      const novoMes = mesAtual - 1;
      await alterarMes(novoMes);
      atualizarMes(novoMes);
    }
  };

  const goToNextMonth = async () => {
    if (mesAtual < months.length) {
      const novoMes = mesAtual + 1;
      await alterarMes(novoMes);
      atualizarMes(novoMes);
    }
  };

  const alterarMes = (novoMes) => {
    return new Promise(() => {
      setMesAtual(novoMes);
    });
  };

  const atualizarMes = (novoMes) => {
    enviarMes(novoMes + 1);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goToPreviousMonth}>
        <Image source={require("../../../assets/images/seta_esquerda.png")} />
      </TouchableOpacity>
      <Text style={{ color: "#fff", fontSize: 25 }}>{` ${
        months[mesAtual - 1]
      } `}</Text>
      <TouchableOpacity onPress={goToNextMonth}>
        <Image source={require("../../../assets/images/seta_direita.png")} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#021422",
    width: "100%",
    height: "10%",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Header;
