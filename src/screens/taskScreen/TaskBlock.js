import React from 'react';
import TaskItem from './TaskItem';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15
    },
})

function TaskBlock({task, nextTask}) {
  return (
    <React.Fragment>
        <Text style={styles.title}>{ task?.word }</Text>
                {task?.variants?.map((val, index)=> (
                    <TaskItem key={index} wordName={val.text} isTrue={val.isTrue} onPress={nextTask}/>
                ) )}
    </React.Fragment>
  )
}

export default TaskBlock