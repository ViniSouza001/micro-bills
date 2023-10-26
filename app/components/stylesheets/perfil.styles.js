import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
   modal: {
      width: '90%',
      height: '65%',
      backgroundColor: "#FFFFFF",
      borderRadius: 30,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20
   },
   img: {
      width: 150,
      height: 150,
   },
   label: {
      fontSize: 25,
   },
   inputArea: {
      width: '100%',
      gap: 10,
      flexDirection: 'column'
   }
})

export default styles