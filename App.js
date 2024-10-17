import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './front/Home';
import Login from './front/Login';
import Protected from './front/Protected';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="login" component={Login} options={{ title: 'Login' }} />
        <Stack.Screen name="protected" component={Protected} options={{ title: 'Protected Area' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
