import React from 'react'
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Colors from '../data/constants/Colors';
import useColorScheme from '../data/hooks/useColorScheme';

function RightIcon({iconName, handleOpen}) {
    const colorScheme = useColorScheme();

    return (
        <Pressable
                onPress={handleOpen}
                style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                })}>
            <AntDesign
            name={iconName}
            size={30}
            color={Colors[colorScheme].text}
            style={{ marginRight: 15 }}
            />
        </Pressable>
    )
}

export default RightIcon