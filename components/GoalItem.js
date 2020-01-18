import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native';

const GoalItem = (props) => {
  const LongPressed = () => { alert('you long pressed')}
  const Pressed = () => { alert("pressed") }
  
  return (
    <TouchableOpacity onLongPress={LongPressed} onPress={Pressed}>
      <View style={styles.listitem}>
        <Text>{props.children}</Text>
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
    width: '75%',
    padding: 5,
  
  }
});

export default GoalItem;