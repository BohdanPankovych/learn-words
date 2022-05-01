import wordsActionTypes from './wordsActionTypes';

export const setWords = (words) => ({
    type: wordsActionTypes.SET_WORDS,
    payload: { words },
  })
  
  export const addWord = (word) => ({
      type: wordsActionTypes.ADD_WORD,
      payload: { word },
  });
  
  export const deleteWord = (id) => ({
    type: wordsActionTypes.DELETE_WORD,
    payload: { id }
  })