import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [euros,setEuros] = useState('');
  const[pounds, setPounds] = useState(0);

  function change(text) {
    setEuros(text)
    const result = text.replace(',', '.') * 0.9;
    setPounds(result);
  }
//  function calculate() {
//    const result = euros.replace(',','.') * 0.9;
//    setPounds(result);
//  }
 return( 
   <View style={styles.container}>
     <Text style ={styles.field}>Euros</Text>
    {/*  <TextInput style={styles.field} value={euros} onChangeText={text => setEuros(text)} */}
    <TextInput style={styles.filed} value={euros} onChangeText={text => change(text)} keyboard-type ='decimal-pad'></TextInput>
    
     <Text style={styles.field}>Punds</Text>
     <Text style={styles.field}>{pounds.toFixed(2)}</Text>
    {/* <Button onPress={calculate} title="Calculate"></Button> */}
   </View>
 );
   




}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  field:{
    marginBottom: 10,
  }
});
