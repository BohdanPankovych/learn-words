import dictionaryActionTypes from './dictionaryActionTypes'

export const setDictionaries = (dictionaries) => ({
  type: dictionaryActionTypes.SET_DICTIONARIES,
  payload: { dictionaries },
})

export const createDictionary = (dictionary) => ({
    type: dictionaryActionTypes.CREATE_DICTIONARY,
    payload: { dictionary },
});

export const deleteDictionary = (id) => ({
  type: dictionaryActionTypes.DELETE_DICTIONARY,
  payload: { id }
})