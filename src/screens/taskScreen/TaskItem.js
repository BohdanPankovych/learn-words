import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import { useDispatch } from 'react-redux';
import Colors from '../../data/constants/Colors';

import { nextTask, addCounter } from '../../data/redux/task/taskActions';

const styles = StyleSheet.create({
    item:{
        width: 250,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 20
    }
})

function TaskItem({ wordName, isTrue }) {
  const dispatch = useDispatch();
  const [bgColor, setbgColor] = React.useState(Colors.white);

  const handlePress = React.useCallback(() =>{
    if(isTrue){
      dispatch(addCounter());
      setbgColor(Colors.green);
    } else {
      setbgColor(Colors.red);
    }
    setTimeout(() => {
      dispatch(nextTask());
      setbgColor(Colors.white);
    }, 600);
  }, [wordName, isTrue]);

  return (
    <Pressable style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})} onPress={handlePress}>
        <View style={[styles.item, {backgroundColor: bgColor}]}>
            <Text>{ wordName }</Text>
        </View>
    </Pressable>
  )
}

export default React.memo(TaskItem)