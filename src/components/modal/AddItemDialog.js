import React, { useState } from "react";
import { TextInput, Modal, StyleSheet, Text, Pressable, View } from "react-native";

const AddItemDialog = ({open, onClose, submit}) => {

    const handleClose = () =>{
        onClose(false);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={handleClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Create dictionary</Text>
                    <TextInput style={styles.input}  placeholder="useless placeholder"/>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
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
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    }, 
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
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
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default AddItemDialog;