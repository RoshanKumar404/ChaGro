import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import NavigationsStrings from '../../constants/NavigationsStrings'

export default function TermsAndCondition({navigation}) {
 
  return (
    <View style={styles.container}>
      <Text onPress={() => navigation.navigate(NavigationsStrings.PHONENUMBER)}>
        TermsAndCondition
      </Text>  
       </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#2c3e50"
  }
})