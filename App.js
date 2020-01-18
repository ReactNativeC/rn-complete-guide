import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList, SafeAreaView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const AddHandler = (enteredGoal) =>  {
    setCourseGoals([...courseGoals, {id: Math.random().toString(), value: enteredGoal}]);     
    setIsAddMode(false);
  }

  const deleteGoal = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  }

  const clearGoalList = () => {
    setCourseGoals([]);
  };

  const cancelHandler = () => {
    setIsAddMode(false);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title = 'Add New Goal' onPress = {() => setIsAddMode(true)} />
        </View>
        <View style={styles.button}>
          <Button title="Clear All" onPress={clearGoalList} color="red"/>
        </View>        
      </View>      
      <GoalInput 
        onGoal = {AddHandler}
        onCancel = {cancelHandler}
        clearGoalList = {clearGoalList}
        visible = {isAddMode}        
      />
      <View style={styles.list}>
        <FlatList 
          data = {courseGoals}
          renderItem = { itemData => 
            <GoalItem 
              id = {itemData.item.id}
              title = {itemData.item.value}
              onDelete={deleteGoal}
            />
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
  list: {
    marginTop: 20,
  },
  buttonContainer: {    
    flexDirection: 'row', 
    justifyContent: 'center'
  },
  button: {
    marginHorizontal: 10,
    width: '40%'
  }
})
