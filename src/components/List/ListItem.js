import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    item:{
      // backgroundColor: 'green',
      borderBottomWidth: 1,
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    content: {
      flexDirection: "row",
      justifyContent: "space-between",
    },
    textStyle: {
      color: "white",
      textAlign: "center",
      fontSize: 18
    },
    deleteButton: {
      backgroundColor: "black",
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 15
    }
  });


const ListItem = ({id, firstSection, secondSection, onDelete}) => {

    const handleDelete = React.useCallback(() => {
        onDelete(id)
    }, [onDelete])

    return (    
        <View style={styles.item}>
            <View style={styles.content}>
                <Text style={styles.title}>{firstSection}</Text>
                <Text style={styles.title}>{secondSection}</Text>
                <Pressable style={styles.deleteButton} onPress={handleDelete}>
                <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default React.memo(ListItem);