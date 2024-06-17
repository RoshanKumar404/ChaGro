import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import React, { useState } from 'react'
import strings from '../../constants/languages';
import NavigationsStrings from '../../constants/NavigationsStrings';
import OTPTextView from 'react-native-otp-textinput';
import { verticalScale } from '../../constants/Responsivedesign';
import { useNavigation } from '@react-navigation/native';
import action from '../../ReduxPart/action';
OTPTextView

export default function OtpVerification({ route }) {
  const { phonenumber, data } = route.params || {};
  const navigation = useNavigation();
  const [otp, setOtp] = useState('');
  const donebutton = () => {
    navigation.navigate(NavigationsStrings.EDITPROFILE

    );
  };

  console.log("route params", data, "route params ", route.params)


  const handleChange = async (value) => {
    if (value.length >= 6) {
      setOtp(value)

      action.singnup({
        ...data,
        _id: "i34392bdcsj"
      })
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          {/* ku6 bhi aa jaye */}
          {phonenumber ? phonenumber : 'Phone number not available'}
        </Text>
        <TouchableOpacity style={styles.doneButton} onPress={donebutton}>
          <Text style={styles.doneText}>{strings.DONE}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.Description}>
          Enter the otp that we have sent to your number
        </Text>
        <Text style={styles.Description}>
          through the alert box.
        </Text>
      </View>
      <View style={{ alignSelf: "center" }}>
        <OTPTextView
          containerStyle={styles.otpContainer}
          textInputStyle={styles.otpInput}
          handleTextChange={handleChange}
          inputCount={6}
          keyboardType="numeric"
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  doneButton: {
    marginTop: 4,
  },
  doneText: {
    color: '#cdd6c3',
    fontSize: 19,
    fontWeight: 'bold',
  }, container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
    marginBottom: 10,
  },
  otpContainer: {
    marginVertical: verticalScale(100),
    paddingHorizontal: 20,
  },
  otpInput: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    padding: 10,
    color: 'black',
  },
  Description: {
    fontSize: 18,
    fontWeight: "900",
    color: "#34e2a1"
  }

})

// ye mera code hai