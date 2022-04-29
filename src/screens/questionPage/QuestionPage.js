import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import QuestionItem from './QuestionItem';

const styles = StyleSheet.create({
    root:{
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: "white",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15
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

function QuestionPage() {

    const variants = [1,2,3];

  return (
    <View style={styles.root}>
        <View style={styles.container}>
            <Text style={styles.title}>test</Text>
            {variants.map((val, index)=> (
                <QuestionItem key={index}/>
             ) )}
        </View>
    </View>
  )
}

export default QuestionPage