import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { moderateScale, } from '../constants/Responsivedesign'

export default function RoundImage({image="",
    size= 100,
    onPress=()=>{}
}) {

    
  return (
    <TouchableOpacity onPress={onPress} style={{height:moderateScale(100),
        width:moderateScale(100),
        borderRadius:moderateScale(size/2),
        backgroundColor:"#cdd6c3",alignItems:"center",
    justifyContent:"center",borderWidth:1}}
        >{image?(<Image
        source={{uri:image}}
        style={{height: '100%', width: '100%', borderRadius: moderateScale(size / 2) }}
      />)
      :<Text style={{fontSize:16}}>Add picture</Text>}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    RoundImage:{
        
    }
})