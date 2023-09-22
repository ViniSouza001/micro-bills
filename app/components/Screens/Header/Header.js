import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Header = () => {
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
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <TouchableOpacity onPress={goToPreviousMonth}>
        <Text>{'<'}</Text>
      </TouchableOpacity>
      <Text>{` ${months[currentMonthIndex]} `}</Text>
      <TouchableOpacity onPress={goToNextMonth}>
        <Text>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
