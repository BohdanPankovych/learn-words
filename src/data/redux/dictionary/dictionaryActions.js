import dictionaryActionTypes from './dictionaryActionTypes'

export const createDictionary = (dictionary) => ({
    type: dictionaryActionTypes.CREATE_DICTIONARY,
    payload: { dictionary },
});

export const deleteDictionary = (id) => ({
  type: dictionaryActionTypes.DELETE_DICTIONARY,
  payload: { id }
})