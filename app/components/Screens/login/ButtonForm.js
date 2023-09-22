import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from '../../stylesheets/LoginScreen.styles'
function ButtonForm({ text, handleOnPress }) {
   return (
      <TouchableOpacity
         style={styles.button}
         onPress={handleOnPress}>
         <Text style={styles.txtButton}>{text}</Text>
      </TouchableOpacity>
   )
}

export default ButtonForm