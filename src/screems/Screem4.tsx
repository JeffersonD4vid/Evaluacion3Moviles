import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { stylesGlobal } from '../theme/appThemes';
import { InputComponent } from '../components/InputComponents';
import { ButtonComponents } from '../components/ButtonComponents';

interface NumerosForm{
  num1:string,
  num2:string
}

export const Screem4 = () => {

  const [numeros, setNumeros] = useState<NumerosForm>({
      num1: '',
      num2: ''
  });

  const [resultado, setResultado] = useState('')

  const handlerChangeText = (name:string, value:string) =>{
    setNumeros((prevNumeros) => ({
      ...prevNumeros,
      [name]: value
    }));
  }
  
  const compararNumeros = () => {
    const numero1 = parseInt(numeros.num1);
    const numero2 = parseInt(numeros.num2);

  
      if (numero1 >= numero2) {
        setResultado(`El número ${numero1} es mayor o igual que ${numero2}`);
      } else {
        setResultado(`El número ${numero2} es mayor o igual que ${numero1}`);
      }

  };

  return (
  <View style={stylesGlobal.container}>
      <View>
          <Text style={stylesGlobal.title}>Mayor o igual que  </Text>
      </View>
      <View style={styles.contentForm}>
          <Text style={stylesGlobal.titleForm}> Ingrese un numero </Text>
          <InputComponent name='num1' 
                          onChangeText={handlerChangeText}/>
          <Text style={stylesGlobal.titleForm}> Ingrese otro numero</Text>
          <InputComponent name='num2' 
                          onChangeText={handlerChangeText}/>
      </View>
      <View style={styles.contentBtn}>
          <ButtonComponents title='Comparar' onPress={compararNumeros}/>
      </View>
      <Text style={stylesGlobal.titleForm}>{resultado}</Text>
  </View>
  )
}

const styles=StyleSheet.create({
  contentForm:{
    bottom:30
  },

  contentBtn:{
    width:'55%'
  }
})