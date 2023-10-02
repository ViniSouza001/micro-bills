import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
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
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    width: '100%',
    height: '10%'
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
