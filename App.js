import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';

import HomeScreen from './src/Screens/HomeScreen';
import RegistrationScreen from './src/Screens/Registration';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}  options={{headerShown: false}}/>
      <Stack.Screen name="Registration" component={RegistrationScreen}  options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}
