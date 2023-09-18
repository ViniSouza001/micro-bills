import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TesteScreen from './components/Screens/TesteScreen';
import HomeScreen from './components/Screens/HomeScreen';

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}