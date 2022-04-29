import React from 'react';
import RightIcon from '../RightIcon';
import AddItemDialogContainer from '../modal/container/AddItemDialogContainer';
import appService from '../../storage/appService';
import DictionariesMock from '../../data/mock/DictionariesMock';

const AddItemButton = ({dictionaries, dictionary, createDictionary, resetReducer, id, ...props}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = React.useCallback(() =>{
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
        <React.Fragment>
            <RightIcon handleOpen={handleOpen} iconName="plus"/>
            <AddItemDialogContainer open={open} onClose={setOpen} submit={handleAddDictionary} {...props}/>
        </React.Fragment>
    )
}

export default React.memo(AddItemButton);