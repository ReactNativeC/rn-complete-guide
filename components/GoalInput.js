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
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button  title="Cancel" color="red" onPress={props.onCancel} />
            </View>
            <View style={styles.button}>
              <Button title="Add" onPress={onAddPressed} />                 
            </View>
            
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
    width: '85%',
    marginBottom: 20,
    
  },
  buttonContainer: {    
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 10,
    width: '40%'
  }
});

export default GoalInput;