import modalActionTypes from './modalActionTypes';

export const setDictionaryName = (name) => ({
    type: modalActionTypes.SET_DICTIONARY_NAME,
    payload: { name }
})

export const setWordName = (name) => ({
    type: modalActionTypes.SET_WORD_NAME,
    payload: { name }
})

export const setWordTranslate = (translate) => ({
    type: modalActionTypes.SET_WORD_TRANSLATE,
    payload: { translate }
})

export const addWord = (word) => ({
    type: modalActionTypes.ADD_WORD,
    payload: { word }
})

const ModalActionTypes = {
    setDictionaryName,
    setWordName,
    setWordTranslate,
    addWord
}

export default ModalActionTypes;