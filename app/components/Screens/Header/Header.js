import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { StyleSheet } from 'react-native';

function Header() {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];

  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const goToPreviousMonth = () => {
    if (currentMonthIndex > 0) {
      setCurrentMonthIndex(currentMonthIndex - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonthIndex < months.length - 1) {
      setCurrentMonthIndex(currentMonthIndex + 1);
    }
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={goToPreviousMonth}>
        <Image source={require('../../../assets/images/seta_esquerda.png')} />
      </TouchableOpacity>
      <Text style={{ color: '#fff', fontSize: 25 }}>{` ${ months[currentMonthIndex] } `}</Text>
      <TouchableOpacity onPress={goToNextMonth}>
        <Image source={require('../../../assets/images/seta_direita.png')} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#021422',
    width: '100%',
    height: '10%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20
  },
})

export default Header;
