import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';


export default function App() {
  const [age,setAge] = useState('');
  const[lower, setLower] = useState(0);
  const[higher, setHigher] = useState(0);
  const[result, setResult] = useState(0);

  function change() {
    
    const result_lower = (220 - age) * 0.65;
    const result_higher = (220 - age) * 0.85;
    setLower(result_lower);
    setHigher(result_higher);

  }
//  function change(text) {
 //   setEuros(text)
//    const result = text.replace(',', '.') * 0.9;
//    setPounds(result);
//  }
//  function calculate() {
//    const result = euros.replace(',','.') * 0.9;
//    setPounds(result);
//  }
 return( 
  <View style={styles.container}>
  <Text>Heart rate limits</Text>
  {/* <Button onPress={change} title="Calculate"></Button>  */}
  
  <Text>age: </Text>
  <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} keyboardType='decimal-pad'/>

  <Button onPress={change} title="Calculate"></Button>
  <Text style={styles.field}>{lower.toFixed(0)} - {higher.toFixed(0)}</Text>
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
