import Immutable from "immutable";
import modalActionTypes from './modalActionTypes';
import WordDTO from '../../immutableEntities/WordDTO';
import DictionaryDTO from '../../immutableEntities/DictionaryDTO';

const defaultState = new Immutable.OrderedMap({
    dictionary: new DictionaryDTO(),
    word: new WordDTO()
})

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
      case modalActionTypes.SET_DICTIONARY_NAME:
        return state.setIn(["dictionary", "dictionaryName"], action.payload.name)
                    .setIn(["dictionary", "wordsFileName"], action.payload.name);
  
      case modalActionTypes.SET_WORD_NAME:
        return state.setIn(["word", "wordName"], action.payload.name);
      
      case modalActionTypes.SET_WORD_TRANSLATE:
        return state.setIn(["word", "wordTranslate"], action.payload.translate);


      case modalActionTypes.RESET_REDUCER:
        return defaultState
      default:
        return state;
    }
  };
  
  export default modalReducer;