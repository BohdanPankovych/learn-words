import Immutable from "immutable";
import wordsActionTypes from "./wordsActionTypes";

const defaultState = new Immutable.OrderedMap({
  words: [],
});

const dictionaryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case wordsActionTypes.SET_WORDS:
      return state.set("words", action.payload.words);
    case wordsActionTypes.ADD_WORD:
      return state.update("words", words => [...words, action.payload.word]);
    
    case wordsActionTypes.DELETE_WORD:
      return state.update("words", words => words.filter(val => val.id != action.payload.id));

    default:
      return state;
  }
};

export default dictionaryReducer;
