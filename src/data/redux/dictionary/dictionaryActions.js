import dictionaryActionTypes from './dictionaryActionTypes'

export const createDictionary = () => ({
    type: dictionaryActionTypes.CREATE_DICTIONARY,
  });

export const deleteDictionary = (id) => ({
  type: dictionaryActionTypes.DELETE_DICTIONARY,
  payload: { id }
})