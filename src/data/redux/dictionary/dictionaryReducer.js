import Immutable from "immutable";
import dictionaryActionTypes from "./dictionaryActionTypes";

const defaultState = new Immutable.OrderedMap({
  dictionary: ["English", "German", "Polish"],
});

const dictionaryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case dictionaryActionTypes.CREATE_DICTIONARY:
      return state.update("dictionary", dictionary => [...dictionary, 10]);
    
    case dictionaryActionTypes.DELETE_DICTIONARY:
      return state.update("dictionary", dictionary => dictionary.filter(val => val != action.payload.id));

    default:
      return state;
  }
};

export default dictionaryReducer;
