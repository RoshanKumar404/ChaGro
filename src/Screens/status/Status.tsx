import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Status() {
  return (
    <View style={styles.container}>
      <Text>its your status screen </Text>
      
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