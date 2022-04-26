import React, { useState } from "react";
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";
import TextField from '../input/TextField';
import { FontAwesome } from '@expo/vector-icons';

const AddItemDialog = ({
                        open, 
                        onClose, 
                        submit, 
                        dictionary, 
                        word, 
                        isWordAdd = false,
                        setDictionaryName,
                        setWordName,
                        setWordTranslate
                      }) => {
    const handleClose = React.useCallback(() =>{
        onClose(false);
    }, [onClose])

    const { wordName, wordTranslate } = word || {};

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={handleClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>

                    <Pressable style={styles.closeButton} onPress={handleClose}>
                      <FontAwesome 
                        name="close"
                        size={25}
                        style={{color: "#D8D8D8"}}
                      />
                    </Pressable>

                    <Text style={styles.title}>{isWordAdd ? "Add word" : "Create dictionary"}</Text>
                    {!isWordAdd && <TextField  placeholder="dictionary name" value={dictionary} onChange={setDictionaryName}/>}
                    {isWordAdd && <>
                      <TextField value={wordName} placeholder="word" onChange={setWordName}/>
                      <TextField value={wordTranslate} placeholder="translate" onChange={setWordTranslate}/>
                    </>}
                    <Pressable
                      style={styles.button}
                      onPress={submit}
                    >
                        <Text style={styles.textStyle}>Submit</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      position: "relative",
      backgroundColor: "white",
      borderRadius: 20,
      padding: 40,
      paddingTop: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    closeButton: ({ pressed }) => ({
      position: "absolute",
      right: 10,
      top: 10,
      zIndex: 100,
      opacity: pressed ? 0.5 : 1,
    }),  
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: "black",
      width: 175
    },
    textStyle: {
      color: "white",
      textAlign: "center",
      fontSize: 24
    },
    title: {
      marginBottom: 15,
      fontWeight: "bold",
      fontSize: 22,
      textAlign: "center"
    }
  });

export default AddItemDialog;