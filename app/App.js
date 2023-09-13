import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Screens/HomeScreen';

export default function App() {
  return (
    <View>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}