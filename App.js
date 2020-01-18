import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  const onEnteredGoalTextChanged = (enteredText) => setEnteredGoal(enteredText);
  const addEnteredGoal = () =>  {
    setCourseGoals([...courseGoals, {id: Math.random().toString(), value: enteredGoal}]);    
    console.log(enteredGoal);    
  }
  const clearAllGoals = () => {
    setCourseGoals([]);
    setEnteredGoal('');
  };

  return (
    <SafeAreaView style={styles.screen}>

      <View style={styles.inputContainer}>
        <TextInput style={styles.textbox} 
          placeholder="Enter Course Goal" 
          onChangeText = {onEnteredGoalTextChanged}
          value = {enteredGoal}
        />
        <Button title="Add" onPress={addEnteredGoal} />
        <Button title="Clear" onPress={clearAllGoals} />
      </View>
      
      <View style={styles.list}>
        <FlatList 
          data = {courseGoals}
          renderItem = { itemData => 
            <View style={styles.listitem}>
              <Text>{itemData.item.value} </Text>
            </View>             
          }
          keyExtractor = {(item, index) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fff',    
    justifyContent: 'center',    
    marginHorizontal: 20,
    marginTop: 100,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  textbox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    width: '75%'
  },
  list: {
    marginTop: 20,
  },
  listitem: {
    height: 30,
    backgroundColor: 'skyblue',
    marginVertical: 2,
    justifyContent: 'center',
    width: '75%',
    padding: 5,
  
  }

});
