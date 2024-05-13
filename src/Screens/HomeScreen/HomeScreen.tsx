import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function HomeScreens() {
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
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