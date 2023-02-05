import React from 'react'
import { View, StyleSheet } from 'react-native';
import TaskBlock from './TaskBlock';
import ReturnBlock from './ReturnBlock';
import SQLService from '../../storage/SQLService';
import buildTasks from '../../data/algorithm/buildTasks';
import { TASK_TYPES_VALUE } from '../../data/constants/Lessons';

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
    },
    container: {
        width: 350,
        height: 550,
        backgroundColor: "white",
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
})

function TaskScreen({task, selectedDictionary, stopTest, setTask, setWords, resetReducer, route}) {
    //TODO: rewrite code logic
    const getWordsByDictionaryName = () =>{
        const taskType = route.params.taskType;

        SQLService.getWordsList(selectedDictionary, (dict) => {    
            const words = buildTasks(dict, TASK_TYPES_VALUE[taskType]);
            
            //get first task
            setTask(words.pop());
            setWords(words);
        })
    }

    React.useEffect(() =>{
        getWordsByDictionaryName();
        return () =>{
            resetReducer();
        }
    }, []);

    return (
        <View style={styles.root}>
            <View style={styles.container}>
                {stopTest ? <ReturnBlock/> : <TaskBlock task={task}/>}
            </View>
        </View>
    )
}

export default TaskScreen;