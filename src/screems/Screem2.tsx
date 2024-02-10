import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appThemes';

export const Screem2 = () => {
  return (
    <View style={stylesGlobal.container}>
      <Text style={stylesGlobal.title}> Pantalla 1 </Text>
      <View>
        <Image style={styles.img} 
          source={{uri:'https://w0.peakpx.com/wallpaper/221/949/HD-wallpaper-bob-esponja-mafioso-bob-esponja-gangster-mafioso-meme.jpg'}}/>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
  img:{
    width:300,
    height:300,
    borderRadius:30,
  }
})