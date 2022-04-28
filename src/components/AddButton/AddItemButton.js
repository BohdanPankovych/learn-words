import React from 'react';
import AddItemDialogContainer from '../modal/container/AddItemDialogContainer';
import appService from '../../storage/appService';
import { Pressable } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../data/constants/Colors';
import useColorScheme from '../../data/hooks/useColorScheme';
import DictionariesMock from '../../data/mock/DictionariesMock';

const AddItemButton = ({dictionaries, dictionary, createDictionary, resetReducer, ...props}) => {
    const colorScheme = useColorScheme();
    const [open, setOpen] = React.useState(false);

    const handleClose = React.useCallback(() =>{
        setOpen(true);
    }, [])

    //TODO: Find better decision to update files
    const handleAddDictionary = React.useCallback(() =>{
        appService.updateDictionaryList([...dictionaries, dictionary])
        .then((res) => {
            createDictionary(dictionary);
            resetReducer();
        })
        .catch((err) => console.error(err))
        .finally(() => setOpen(false))
    }, [dictionaries, dictionary])

    const handleAddWord = React.useCallback(() =>{

    }, []);

    return (
        <Pressable
            onPress={handleClose}
            style={({ pressed }) => ({
            opacity: pressed ? 0.5 : 1,
            })}>
        <FontAwesome
          name="plus"
          size={30}
          color={Colors[colorScheme].text}
          style={{ marginRight: 15 }}
        />
        <AddItemDialogContainer open={open} onClose={setOpen} submit={handleAddDictionary} {...props}/>
      </Pressable>
    )
}

export default React.memo(AddItemButton);