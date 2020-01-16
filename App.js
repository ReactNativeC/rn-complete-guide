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
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 50,
    width: '80%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  box1: {
    flex: 3,
    backgroundColor:'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box2: {
    flex: 6,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box3: {
    flex: 2,
    backgroundColor:'green',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
