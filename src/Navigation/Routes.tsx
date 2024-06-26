 // In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import MyTabs from './Tabroutes';
import { useSelector } from 'react-redux';

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
  const useerData=useSelector(state=>state.auth.userData)
  //console.log("values",useerData);
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        {!!useerData?._id?<>{MainStack(Stack)}</>:<>{AuthStack(Stack)}</>}
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;