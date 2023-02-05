import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import ConfirmDialog from '../modal/ConfirmDialog';

const styles = StyleSheet.create({
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    translate: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    item:{
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
    deleteButton: ({pressed}) => ({
      backgroundColor: "black",
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 15,
      opacity: pressed ? 0.5 : 1
    })
  });


const ListItem = ({firstSection, secondSection, onDelete, isDeleteWord=false}) => {
    const [open, setOpen] = React.useState(false);

    const handleDelete = React.useCallback(() =>{
      onDelete()
      setOpen(false);
    }, [])

    const handleOpen = React.useCallback(() =>{
      setOpen(true);
    }, [])

    const handleClose = React.useCallback(() =>{
      setOpen(false);
    }, [])

    return (    
        <View style={styles.item}>
            <View style={styles.content}>
                <Text style={styles.title}>{firstSection}</Text>
                <Text style={styles.translate}>{secondSection}</Text>
                <Pressable style={styles.deleteButton} onPress={handleOpen}>
                  <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
            </View>
            <ConfirmDialog open={open} handleClose={handleClose} handleSubmit={handleDelete} isDeleteWord={isDeleteWord}/>
        </View>
    )
}

export default React.memo(ListItem);