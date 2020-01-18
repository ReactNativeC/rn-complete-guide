import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';

const GoalItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onDelete.bind(this, props.id)} >
      <View style={styles.listitem}>
        <Text>{props.title}</Text>
      </View>           
    </TouchableOpacity>  
  );
}

const styles = StyleSheet.create({
  listitem: {
    height: 30,
    backgroundColor: 'skyblue',
    marginVertical: 2,
    justifyContent: 'center',
    width: '100%',
    padding: 5,
  
  }
});

export default GoalItem;