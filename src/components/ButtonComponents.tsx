import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title:string;
    onPress:()=>void;
}

export const ButtonComponents = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={onPress}>
        <Text style={styles.buttonText}>
            {title}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor:'#8C90E0',
        paddingVertical:15,
        borderRadius:30,
        marginVertical:10
    },

    buttonText:{
        textAlign:'center',
        color:'#fff',
        fontSize:20,
        fontWeight:'bold'
    }
})