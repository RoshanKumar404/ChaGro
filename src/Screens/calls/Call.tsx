import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import strings from '../../constants/languages'
import { NavigationContainer } from '@react-navigation/native'
import NavigationsStrings from '../../constants/NavigationsStrings'

export default function Call() {
  const donebutton = () => {
   
  };
  return (
   <SafeAreaView>
     <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Complete your Profilee!!!!
          </Text>
          {/* <TouchableOpacity style={styles.doneButton} onPress={donebutton}>
            <Text style={styles.doneText}>{strings.DONE}</Text>
          </TouchableOpacity> */}
        </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // container:{
  //   flex:1,
  //   justifyContent:"center",
  //   alignItems:"center",
  //   backgroundColor:"#2c3e50"
  // }
  ontainer: {
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
})