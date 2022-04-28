import React from 'react';
import { Modal, StyleSheet, Text, Pressable, View } from "react-native";

const ConfirmDialog = ({open, handleClose, handleSubmit, isDeleteWord=false}) => {
    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={open}
            onRequestClose={handleClose}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.title}>{isDeleteWord ? "Delete word?" : "Delete dictionary?"}</Text>
                    <View style={styles.fixToText}>
                        <Pressable
                        style={styles.button}
                        onPress={handleSubmit} 
                        >
                            <Text style={styles.textStyle}>Delete</Text>
                        </Pressable>
                        <Pressable
                        style={styles.button}
                        onPress={handleClose}
                        >
                            <Text style={styles.textStyle}>Cancle</Text>
                        </Pressable>
                    </View>
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
    fixToText: {
        marginTop: 50,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    button: {
      borderRadius: 10,
      padding: 10,
      elevation: 2,
      backgroundColor: "black",
      width: 150
    },
    textStyle: {
      color: "white",
      textAlign: "center",
      fontSize: 18
    },
    title: {
        marginTop: 10,
      marginBottom: 15,
      fontWeight: "bold",
      fontSize: 22,
      textAlign: "center"
    }
  });

export default React.memo(ConfirmDialog);