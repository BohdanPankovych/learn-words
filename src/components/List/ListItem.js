import React from 'react';
import { StyleSheet, Pressable } from 'react-native';
import { Text, View } from '../../components/Themed';
import ConfirmDialog from '../modal/ConfirmDialog';
import { useSelector } from 'react-redux';
import appService from '../../storage/appService';

const styles = StyleSheet.create({
    title: {
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
    deleteButton: {
      backgroundColor: "black",
      borderRadius: 10,
      paddingVertical: 7,
      paddingHorizontal: 15
    }
  });


const ListItem = ({id, firstSection, secondSection, onDelete}) => {
    const [open, setOpen] = React.useState(false);
    const dicitionaries = useSelector(state => state.dictionary.get("dictionary"));

    const handleDelete = React.useCallback(() => {
        onDelete(id)
        console.log(dicitionaries.filter(val => val.id != id))
        appService.updateDictionaryList(dicitionaries.filter(val => val.id != id))
        .then(() => console.log("delete"))
        .catch((err) => console.error(err))
        .finally(() => setOpen(false))
    }, [onDelete, dicitionaries])

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
                <Text style={styles.title}>{secondSection}</Text>
                <Pressable style={styles.deleteButton} onPress={handleOpen}>
                <Text style={styles.textStyle}>Delete</Text>
                </Pressable>
            </View>
            <ConfirmDialog open={open} handleClose={handleClose} handleSubmit={handleDelete}/>
        </View>
    )
}

export default React.memo(ListItem);