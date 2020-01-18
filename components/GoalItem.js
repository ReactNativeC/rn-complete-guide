import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const GoalItem = (props) => {
  return (
    <View style={styles.listitem}>
      <Text>{props.children}</Text>
    </View>             
  );
}

const styles = StyleSheet.create({
  listitem: {
    height: 30,
    backgroundColor: 'skyblue',
    marginVertical: 2,
    justifyContent: 'center',
    width: '75%',
    padding: 5,
  
  }
});

export default GoalItem;