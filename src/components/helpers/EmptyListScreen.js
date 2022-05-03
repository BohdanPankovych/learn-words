import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    root:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    text:{
        fontSize: 18,
        textAlign: "center"
    }
})

function EmptyListScreen({text}) {
  return (
    <View style={styles.root}>
        <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default EmptyListScreen