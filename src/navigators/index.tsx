import 'react-native-gesture-handler';
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from 'screens';

const RootStack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator headerMode={'none'}>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
