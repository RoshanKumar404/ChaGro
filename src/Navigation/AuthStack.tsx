import React from "react";
// import { Call, Camera, ChatScreen, Editprofile, HomeScreen, OtpVerification } from "../Screens/Index";
// Camer
// Editprofile
// HomeScreen
// OtpVerification
import * as Screens from "../Screens/Index"
import NavigationsStrings from "../constants/NavigationsStrings";
export default function (Stack) {
    return (

        <>
            <Stack.Screen name={NavigationsStrings.TERMSANDCONDITIONS} component={Screens.TermsAndCondition} />
            <Stack.Screen name={NavigationsStrings.PHONENUMBER} component={Screens.PhoneNumber} />
            <Stack.Screen name={NavigationsStrings.OTPVERIFICATION} component={Screens.OtpVerification} />
            <Stack.Screen name={NavigationsStrings.EDITPROFILE} component={Screens.Editprofile} />

        </>
    )
}