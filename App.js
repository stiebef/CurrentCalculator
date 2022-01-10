import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [age,setAge] = useState('');
  const[lower, setLower] = useState(0);
  const[lhigher, setHigher] = useState(0);

  function defineLow() {
    
    const result = (220 - age) * 0.65;
    
    setLower(result);
  }

  function defineHigh() {
    
    const result = (220 - age) * 0.85;
    
    setHigher(result);
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
    <Text style ={styles.field}>Age</Text>
      <TextInput style={styles.field} value={age} onChangeText={text => setAge(text)} keyboard-type ='decimal-pad'></TextInput>
      {/* <TextInput style={styles.filed} value={age} onChangeText={text => change(text)} keyboard-type ='decimal-pad'></TextInput> */}
    
      <Text style={styles.field}>HR limit</Text>
      <TextInput style={styles.field} value={lower} onChangeText={age => setLower()} keyboard-type ='decimal-pad'></TextInput>


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
