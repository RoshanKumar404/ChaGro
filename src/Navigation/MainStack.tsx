import React from "react";
import NavigationsStrings from "../constants/NavigationsStrings";
import * as Screens from "../Screens/Index"

export default function(Stack){
   return( <>
     <Stack.Screen name={NavigationsStrings.HOMEsCREEN} component={Screens.HomeScreen}/>
    <Stack.Screen name={NavigationsStrings.CHATS} component={Screens.ChatScreen}/>
    <Stack.Screen name={NavigationsStrings.STATUS} component={Screens.Status}/>
    <Stack.Screen name={NavigationsStrings.CALLS} component={Screens.Call}/>
    </>)
}