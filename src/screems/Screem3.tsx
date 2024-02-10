import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appThemes'

export const Screem3 = () => {
  return (
  <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}>Pantalla 2</Text>
      <View>
        <Image style={styles.img}
            source={{uri:'https://i.pinimg.com/236x/09/0e/f0/090ef0420bbf959033d050f0f3449d3e.jpg'}}/>
      </View>
  </View>
  )
}

const styles=StyleSheet.create({
  img:{
    width:300,
    height:300,
    borderRadius:30
  }
})
