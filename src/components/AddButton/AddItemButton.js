import React from 'react';
import RightIcon from '../RightIcon';
import AddItemDialogContainer from '../modal/container/AddItemDialogContainer';
import appService from '../../storage/appService';

const AddItemButton = ({
    setWords,
    word, 
    dictionary, 
    createDictionary, 
    resetReducer, 
    id, 
    isWordAdd=false, ...props}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = React.useCallback(() =>{
        setOpen(true);
    }, [])

    const handleAddDictionary = React.useCallback(() =>{
        appService.updateDictionaryList(dictionary, (res) => {
            createDictionary(dictionary);
            resetReducer();
        })
        setOpen(false);
    }, [dictionary])

    const handleAddWord = React.useCallback(() =>{
        appService.updateWordsList(id, word, (res) =>{
            setWords(res);
            resetReducer();
        });
        setOpen(false);
    }, []);

    const handleSubmit = () => {
        if(isWordAdd){
            handleAddWord();
        }else{
            handleAddDictionary();
        }
    }

    return (
        <React.Fragment>
            <RightIcon handleOpen={handleOpen} iconName="plus"/>
            <AddItemDialogContainer open={open} onClose={setOpen} submit={handleSubmit} isWordAdd={isWordAdd} {...props}/>
        </React.Fragment>
    )
}

export default React.memo(AddItemButton);