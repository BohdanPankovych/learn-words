import React from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'

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

function QuestionItem() {
  return (
    <Pressable style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})}>
        <View style={styles.item}>
            <Text>test</Text>
        </View>
    </Pressable>
  )
}

export default QuestionItem