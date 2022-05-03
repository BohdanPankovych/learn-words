import Immutable from "immutable";
import dictionaryActionTypes from "./dictionaryActionTypes";
import DictionariesMock from '../../mock/DictionariesMock';

const defaultState = new Immutable.OrderedMap({
  dictionary: [],
  selectedDictionary: "",
});

const dictionaryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case dictionaryActionTypes.SET_DICTIONARIES:
      return state.set("dictionary", action.payload.dictionaries);
    case dictionaryActionTypes.CREATE_DICTIONARY:
      return state.update("dictionary", dictionary => [...dictionary, action.payload.dictionary]);
    
    case dictionaryActionTypes.DELETE_DICTIONARY:
      return state.update("dictionary", dictionary => dictionary.filter(val => val.id != action.payload.id));

    case dictionaryActionTypes.SELECT_DICTIONARY:
      return state.set("selectedDictionary", action.payload.dictionaryName);

    default:
      return state;
  }
};

export default dictionaryReducer;
