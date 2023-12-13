import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../../stylesheets/LoginScreen.styles";
function ButtonForm({ text, handleOnPress, isDelete }) {
  return (
    <View style={{ width: "80%", alignSelf: "center" }}>
      <TouchableOpacity style={styles.button} onPress={handleOnPress}>
        <Text style={isDelete ? styles.deleteButton : styles.txtButton}>
          {text}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default ButtonForm;
