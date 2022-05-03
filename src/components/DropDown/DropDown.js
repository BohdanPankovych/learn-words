import React from 'react'
import SelectDropdown from 'react-native-select-dropdown';
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from 'react-redux';
import { selectDcitionary } from '../../data/redux/dictionary/dictionaryActions';
import SQLService from '../../storage/SQLService';


const styles = StyleSheet.create({
    button:{
        backgroundColor: "white",
    },
    list:{
        marginTop: -35
    }
  });

function DropDown() {
    const dispatch = useDispatch();
    const dictionariesList = useSelector(state => state.dictionary.get("dictionary"))
    const [dictionaries, setDicitionaries] = React.useState([]);

    React.useEffect(() =>{
        SQLService.getDictionariesList((array) =>{
            setDicitionaries(array);
        })
    }, [dictionariesList]);

    const handleSelect = React.useCallback((selectedItem, index) => {
        dispatch(selectDcitionary(selectedItem.wordsFileName));
    }, []);

    const handleSelectButtonText = React.useCallback((selectedItem, index) => selectedItem.dictionaryName, []);

    const handleSelectRowText = React.useCallback((item, index) => item.dictionaryName, []);

  return (
    <SelectDropdown
        data={dictionaries}
        onSelect={handleSelect}
        defaultValueByIndex={0}
        buttonStyle={styles.button}
        dropdownStyle={styles.list}
        buttonTextAfterSelection={handleSelectButtonText}
        rowTextForSelection={handleSelectRowText}
    />
  )
}

export default DropDown