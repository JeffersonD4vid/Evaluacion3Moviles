import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ButtonComponents } from '../components/ButtonComponents'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParamList } from '../navigator/StackNavigator'
import { stylesGlobal } from '../theme/appThemes'

interface Props extends StackScreenProps<RootStackParamList,'Screem1'>{};


export const Screem1 = ({navigation}:any) => {
  return (
    <View style={stylesGlobal.container}>
        <Text style={stylesGlobal.title}>Evaluacion 3</Text>
        <View style={styles.containerBtns}>
            <ButtonComponents onPress={()=>navigation.navigate('Screem2')} title='Pantalla 1'/>
            <ButtonComponents onPress={()=>navigation.navigate('Screem3')} title='Pantalla 2'/>
            <ButtonComponents onPress={()=>navigation.navigate('Screem4')} title='>='/>
             <ButtonComponents onPress={()=>navigation.navigate('Screem5')} title='<='/>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    
    containerBtns:{
        width:'80%',
    }
})