import 'react-native-gesture-handler';
import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { ScreenContainer } from '../components/ScreenContainer';

const RootStack = createStackNavigator();

function HomeScreen() {
  return (
    <ScreenContainer>
      <Text>Hola</Text>
    </ScreenContainer>
  );
}

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode={'none'}>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
