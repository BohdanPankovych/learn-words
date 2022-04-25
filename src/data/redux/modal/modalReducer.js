import Immutable from "immutable";
import modalActionTypes from './modalActionTypes';
import WordDTO from '../../immutableEntities/WordDTO';

const defaultState = new Immutable.OrderedMap({
    dictionary: "",
    word: new WordDTO()
})

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
      case modalActionTypes.SET_DICTIONARY_NAME:
        return state.set("dictionary", action.payload.word);
  
      default:
        return state;
    }
  };
  
  export default modalReducer;