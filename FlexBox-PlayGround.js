import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text>1</Text>
      </View>
      <View style={styles.box2}>
        <Text>2</Text>
      </View>
      <View style={styles.box3}>
        <Text>3</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#fff',    
    justifyContent: 'center',
    alignItems: 'center',    
    marginHorizontal: 30,
    flex: 1,
    margin: 100,
  
  },
  box1: { 
    flexGrow: 1,   
    backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginVertical: 50,
  },
  box2: {            
    flexGrow: 1, 
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginVertical: 50,
  
  },
  box3: {       
    flexGrow: 1,
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    marginVertical: 50,
  }
});
