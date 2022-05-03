import React from 'react';
import RightIcon from '../RightIcon';
import AddItemDialogContainer from '../modal/container/AddItemDialogContainer';
import SQLService from '../../storage/SQLService';

const AddItemButton = ({
    setWords,
    word, 
    dictionary, 
    setDictionaries, 
    resetReducer, 
    wordsFileName, 
    isWordAdd=false, ...props}) => {
    const [open, setOpen] = React.useState(false);

    const handleOpen = React.useCallback(() =>{
        setOpen(true);
    }, [])

    const handleAddDictionary = React.useCallback(() =>{
        SQLService.updateDictionaryList(dictionary, (res) => {
            setDictionaries(res);
            resetReducer();
        })
        setOpen(false);
    }, [dictionary])

    const handleAddWord = React.useCallback(() =>{
        SQLService.updateWordsList(wordsFileName, word, (res) =>{
            setWords(res);
            resetReducer();
        });
        setOpen(false);
    }, [wordsFileName, word, setWords]);

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