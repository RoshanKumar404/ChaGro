import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import NavigationsStrings from '../../constants/NavigationsStrings'
import { SafeAreaView } from 'react-native-safe-area-context'
import ImagePath from '../../constants/ImagePath'
import strings from '../../constants/languages'

export default function TermsAndCondition({navigation}) {
 
  return (
    <View style={styles.container}>
       <SafeAreaView  >
        <Image source={ImagePath.logoImage2}
        //resizeMode='contain'
        style={{width:413,
          height:600,padding:20
        }}/>
        <Text style={{fontWeight:'bold',fontSize:28,color:"#6e607b", alignSelf:"center"}}>{strings.WELCOME_TO_CHATGRO}</Text>
        <View style={{margin:10}}>        
          <Text style={{fontSize:18,color:"#102f4f"}}>{strings.READ_OUR} <Text style={{fontSize:18,color:"#fefefe"}}>{strings.PRIVACY_POLICY}</Text>{strings.TAP} <Text  style={{fontSize:18,color:"#fefefe"}}> {strings.AGREE_AND_CONTINUE}</Text>{strings.TAP_AND_CONTINUE} </Text>
          </View>
        <TouchableOpacity onPress={()=> navigation.navigate(NavigationsStrings.PHONENUMBER)}>
          <Text style={{alignSelf:"center",fontSize:22, fontWeight:"bold",color:"#fefefe"}} > {strings.AGREE_AND_CONTINUE}</Text>
        </TouchableOpacity>

       </SafeAreaView>
       </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    
    backgroundColor:"#cdd6c3"
  }
})