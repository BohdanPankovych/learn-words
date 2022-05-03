import React from 'react'
import { StyleSheet } from 'react-native';
import { Image, View, Pressable, Text, Alert  } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const LessonItem = ({img, name, taskType}) => {
    const navigation = useNavigation();
    const selectedDicitionary = useSelector(state => state.dictionary.get("selectedDictionary"));
    const handleClick = React.useCallback(() =>{
        if(taskType)
            if(selectedDicitionary){
                navigation.navigate("TaskScreen", {taskType})
            } else {
                Alert.alert(
                    "Ops",
                    "The dicitionary is not selected",
                    [
                        {text: "ok"}
                    ]
                )
            }
    }, [selectedDicitionary]);

    return (
        <React.Fragment>
            <View style={styles.container}>
                <Pressable onPress={handleClick} style={styles.button}>
                        <View style={styles.block}>
                            <Image source={img} style={styles.image}/>
                        </View>
                </Pressable>
                <Text style={styles.text}>{name}</Text>
            </View>
        </React.Fragment>
    )
}

const styles = StyleSheet.create({
    button: ({ pressed }) => ({opacity: pressed ? 0.5 : 1,}),
    container:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    text:{
        fontWeight: "bold"
    },
    block: {
      width: 150,
      height: 150,
      backgroundColor: "white",
      borderRadius: 15,
      marginTop: 15,
      shadowColor: "#000",
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    image: {
        width: 150,
        borderRadius: 15,
        height: 150,
    }
  });

export default React.memo(LessonItem)