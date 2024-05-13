import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PhoneNumber() {
  return (
    <View style={styles.container}>
      <Text>PhoneNumber</Text>
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