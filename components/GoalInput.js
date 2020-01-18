import React, { useState } from 'react';
import {View, Button, TextInput, StyleSheet, ShadowPropTypesIOS} from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  
  const onEnteredGoalTextChanged = (enteredText) => setEnteredGoal(enteredText);

  const clearGoals = () => {
    setEnteredGoal(''); 
    props.ClearGoalList();
  }
  
  return (
    <View style={styles.inputContainer}>
        <TextInput style={styles.textbox} 
          placeHolder = "Enter a Goal" 
          onChangeText = {onEnteredGoalTextChanged}
          value = {enteredGoal} 
        />

        <Button title="Add" onPress={() => props.AddGoal(enteredGoal)} />
        <Button title="Clear All" onPress={clearGoals} />
      </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
  },
  textbox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    width: '70%'
  },
});

export default GoalInput;