import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  const [euros,setEuros] = useState('');
  const[pounds, setPounds] = useState(0);

  function calculate() {
    const result = euros.replace(',','.') * 0.9;
    setPounds(result);
  }
 return( 
   <View style={styles.container}>
     <Text style ={styles.field}>Euros</Text>
     <TextInput style={styles.field} value={euros} onChangeText={text => setEuros(text)}
     keyboardType='decimal-pad'/>
     <Text style={styles.field}>Punds</Text>
     <Text style={styles.field}>{pounds.toFixed(2)}</Text>
     <Button onPress={calculate} title="Calculate"></Button>
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
