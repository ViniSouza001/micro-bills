import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

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
    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#021422',width: '100%', height: '10%' }}>
      <TouchableOpacity onPress={goToPreviousMonth}>
        <Text style={{color:'#fff'}}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={{color:'#fff'}}>{` ${ months[currentMonthIndex] } `}</Text>
      <TouchableOpacity onPress={goToNextMonth}>
        <Text style={{color:'#fff'}}>{'>'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;
