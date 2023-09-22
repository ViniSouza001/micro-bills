import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Image
          source={require('../../../assets/images/grafico.png')}
          style={styles.image}
        />
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={styles.item}>
        <Image
          source={require('../../../assets/images/transacoes.png')} 
          style={styles.image}
        />
        <Text style={styles.text}>Transações</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    height: 60,
  },
  item: {
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  text: {
    marginTop: 4,
  },
});

export default Footer;
