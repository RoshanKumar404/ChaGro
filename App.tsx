import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './src/Navigation/Routes'
import { Provider } from 'react-redux'
import store from './src/ReduxPart/store/store'
store
export default function App() {
  return (
    <Provider store={store}>
    <View style={styles.container}>
      <Routes/>
     
    </View>
    </Provider>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
  }
})