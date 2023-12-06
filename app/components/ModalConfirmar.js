import React from "react";
import { View, Text } from "react-native";
import ButtonForm from "./Screens/login/ButtonForm";
import styles from "./stylesheets/modal.styles";

const ModalConfirmar = ({ msg, confirmar, type }) => {
  return (
    <View style={styles.fundoPreto}>
      <View style={styles.modal}>
        <Text style={styles.label}>
          Tem certeza que você deseja {msg} o item?
        </Text>
        <ButtonForm text={"Sim"} handleOnPress={() => confirmar(true, type)} />
        <ButtonForm text={"Não"} handleOnPress={() => confirmar(false, type)} />
      </View>
    </View>
  );
};

export default ModalConfirmar;
