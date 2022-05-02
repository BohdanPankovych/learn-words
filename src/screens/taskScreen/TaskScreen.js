import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import TaskBlock from './TaskBlock';
import ReturnBlock from './ReturnBlock';
import appService from '../../storage/appService';

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

function TaskScreen({task, stopTest, setTask, nextTask, setWords, resetReducer}) {
    const getRandomValueFromArray = (arrayName) => arrayName[Math.floor(Math.random() * arrayName.length)].wordTranslate;

    //TODO: find better decision or rewrite code
    const getWordsByDictionaryName = () =>{
        appService.getWordsList("English", (res) =>{
            const words = res.map(val => {
                return {...val, variants: [
                    {text: val.wordTranslate, isTrue: true},
                    {text: getRandomValueFromArray(res), isTrue: false},
                    {text: getRandomValueFromArray(res), isTrue: false}
                ]}
            });
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
                {stopTest ? <ReturnBlock/> : <TaskBlock task={task} nextTask={nextTask}/>}
            </View>
        </View>
    )
}

export default TaskScreen;