import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import strings from '../../constants/languages';
import NavigationsStrings from '../../constants/NavigationsStrings';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function PhoneNumber({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>
          Enter your phone number
        </Text>
        <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate(NavigationsStrings.OTPVERIFICATION)}>
          <Text style={styles.doneText}>{strings.DONE}</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.messageContainer}>
        <Text style={styles.generalMessage}>
          {strings.GENERAL_MESSAGE}
        </Text>
      </View>
      
      <View style={styles.countryContainer}>
        <Text style={styles.countryText}>India</Text>
        <TouchableOpacity>
          <MaterialCommunityIcons name="arrow-right" color="black" size={24} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  messageContainer: {
    marginVertical: 10,
    borderBottomWidth: 0.8,
    paddingBottom: 10,
  },
  generalMessage: {
    color: 'black',
    fontSize: 16,
  },
  countryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    paddingVertical: 10,
  },
  countryText: {
    fontSize: 16,
    color: 'black',
  },
});
