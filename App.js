import React, { useState } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, TextBase} from 'react-native'
import Slider from '@react-native-community/slider';
import Clipboard from 'expo-clipboard';

let charset='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export default function App(){
  const[password, setPassword] = useState('');
  const[size, setSize] = useState(10);

  function generatePassword(){
    let pass = '';
    for(let i = 0, n = charset.length; i < size; i++){
      pass += charset.charAt(Math.floor(Math.random() * n))
    }
    setPassword(pass);
  }

  function copyPass(){
    Clipboard.setString(password);
    alert('senha copiada com sucesso!')
  }
  return(
    <View style={styles.cointainer}>
      <Image
        source={require('./src/assets/logoTeste.png')}
        style={styles.logo}
      />
      <Text style={styles.title}>{size} Caracteres</Text>
      <View style={styles.area}>
        <Slider 
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
          minimumTrackTintColor='#003d00'
          maximumTrackTintColor='#629749'
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
          backgroundColor='#85bb5c'
          borderRadius= '7'

        />
      </View>
      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== '' && (
      <View style={styles.area}>
        <Text style={styles.passwordStyle} onLongPress={copyPass}>{password}</Text>
      </View>
      )}
      
      <Text style={styles.tituloDev}>@davi_gs__</Text>
    </View>
    
    
  )
}

const styles = StyleSheet.create({
  tituloDev:{
    fontSize: 14,
    color: '#FFF',
    alignItems: 'baseline',
    fontWeight: 'bold'
  },
  cointainer:{
    flex:1,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#558b2f'
  },
  logo:{
    marginBottom: 60
  },
  title:{
    fontSize:30,
    fontWeight: 'bold',
    color: '#FFF'
  },
  area:{
    marginTop: 15,
    marginBottom:15,
    backgroundColor: '#85bb5c',
    width: '70%',
    borderRadius: 7,
    fontWeight:'bold'
  },
  button:{
    backgroundColor: '#255d00',
    width:'60%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginBottom: 25,
  },
  buttonText:{
    fontSize: 20,
    color: '#FFF',
    fontWeight:'bold'
  },
  passwordStyle:{
    padding: 10,
    textAlign: 'center',
    fontSize: 15,
    color:'#FFF',
    fontWeight: 'bold'
  }

});