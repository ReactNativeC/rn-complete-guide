import React, { useState } from 'react';
import {View, Modal, Button, TextInput, StyleSheet} from 'react-native';

const GoalInput = (props) => {  
  const [enteredGoal, setEnteredGoal] = useState('');  
  const onEnteredGoalTextChanged = (enteredText) => setEnteredGoal(enteredText);
  const onAddPressed = () => {
    props.onGoal(enteredGoal);
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
          <View style={styles.buttonsContainer}>
            <Button title="Add" onPress={onAddPressed} />     
            <Button title="Cancel" color="red" onPress={props.onCancel} />
          </View>
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
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default GoalInput;