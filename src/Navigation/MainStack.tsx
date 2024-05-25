import React from "react";
import NavigationsStrings from "../constants/NavigationsStrings";
import * as Screens from "../Screens/Index"
import MyTab from "./Tabroutes";

export default function(Stack){
   return( <>
     <Stack.Screen name={NavigationsStrings.TABROUTES} component={MyTab}/>
    {/* <Stack.Screen name={NavigationsStrings.CHATS} component={Screens.ChatScreen}/>
    <Stack.Screen name={NavigationsStrings.STATUS} component={Screens.Status}/>
    <Stack.Screen name={NavigationsStrings.CALLS} component={Screens.Call}/> */}
    </>)
}