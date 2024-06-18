import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as Screens from "../Screens/Index"
import NavigationsStrings from "../constants/NavigationsStrings";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export default function MyTab() {
    return (

        <Tab.Navigator initialRouteName={NavigationsStrings.HOMEsCREEN}
            screenOptions={{
                tabBarActiveTintColor: "#49ace9",
                tabBarInactiveTintColor: "black"
            }}
        >

            <Tab.Screen name={NavigationsStrings.HOMEsCREEN} component={Screens.HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name={NavigationsStrings.CHATS} component={Screens.ChatScreen}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chat" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen name={NavigationsStrings.STATUS} component={Screens.Status}
                options={{
                    tabBarLabel: "Status",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="adjust" color={color} size={size} />
                    )
                }} />
            <Tab.Screen name={NavigationsStrings.CALLS} component={Screens.Call}

                options={{
                    tabBarLabel: "Call",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialCommunityIcons name="phone" color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>

    );
}