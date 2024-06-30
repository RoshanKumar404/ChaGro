import React from 'react';

import * as Screens from '../Screens/Index';
import MyTab from './Tabroutes';
import NavigationsStrings from '../constants/NavigationsStrings';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={NavigationsStrings.TABROUTES} component={MyTab} />
      {/* <Stack.Screen name={NavigationsStrings.EDITPROFILE} component={Screens.Editprofile} /> */}
      <Stack.Screen name={NavigationsStrings.CHATS} component={Screens.ChatScreen} />
      <Stack.Screen name={NavigationsStrings.STATUS} component={Screens.Status} />
      <Stack.Screen name={NavigationsStrings.CALLS} component={Screens.Call} />
    </Stack.Navigator>
  );
}
