 // In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import MyTabs from './Tabroutes';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color:"black",fontSize:28}}>Home Screen</Text>
      <Text style={{color:"black",fontSize:28}}>jia sri Ram</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {true?<>{MainStack(Stack)}</>:<>{AuthStack(Stack)}</>}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;