import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native'
import HomeScreen from './components/screens/HomeScreen'
import global from './components/stylesheets/global.styles';

export default function App() {
  return (
    <View style={global.container}>
      <HomeScreen />
    </View>
  );
}