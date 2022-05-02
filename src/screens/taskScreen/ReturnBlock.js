import React from 'react'
import { Text, View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    root:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    title:{
        fontSize: 24,
        fontWeight: "bold"
    },
    item:{
        width: 150,
        borderRadius: 10,
        borderWidth: 1,
        marginTop: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    }
})

function ReturnBlock() {
    const navigate = useNavigation();
    const handlePress = React.useCallback(() =>{
        navigate.goBack();
    }, [])

  return (
      <View style={styles.root}>
            <Text style={styles.title}>End</Text>
            <Pressable style={({ pressed }) => ({opacity: pressed ? 0.5 : 1,})} onPress={handlePress}>
                <View style={styles.item}>
                    <Text>Return</Text>
                </View>
            </Pressable>
      </View>
  )
}

export default React.memo(ReturnBlock);