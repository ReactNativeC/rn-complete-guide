import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, SafeAreaView } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);


  const addEnteredGoal = (enteredGoal) =>  {
    setCourseGoals([...courseGoals, {id: Math.random().toString(), value: enteredGoal}]); 
  }

  const deleteGoal = (goalId) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== goalId));
  }

  const clearGoalList = () => {
    setCourseGoals([]);
  };

  return (
    <SafeAreaView style={styles.screen}>

      <GoalInput 
        AddGoal = {addEnteredGoal}
        ClearGoalList = {clearGoalList}
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
})
