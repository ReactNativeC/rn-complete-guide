import React, { useState } from 'react';
import {View, Modal, Button, TextInput, StyleSheet} from 'react-native';

const GoalInput = (props) => {  
  const [enteredGoal, setEnteredGoal] = useState('');  
  const onEnteredGoalTextChanged = (enteredText) => setEnteredGoal(enteredText);
  const onAddPressed = () => {
    props.addGoal(enteredGoal);
    setEnteredGoal('');
  }
  return (
    <Modal 
      visible={props.visible} 
      animationType='slide'
      >      
      <View style={styles.inputContainer}>
          <TextInput style={styles.textbox} 
            placeHolder = "Enter a Goal" 
            onChangeText = {onEnteredGoalTextChanged}
            value = {enteredGoal}             
          />
          
          <Button title="Add" onPress={onAddPressed} />          
        </View>
      </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 5,
    width: '70%'
  },
});

export default GoalInput;