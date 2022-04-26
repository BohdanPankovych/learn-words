import Immutable from "immutable";
import dictionaryActionTypes from "./dictionaryActionTypes";
import DictionariesMock from '../../mock/DictionariesMock';

const defaultState = new Immutable.OrderedMap({
  dictionary: DictionariesMock,
});

const dictionaryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case dictionaryActionTypes.CREATE_DICTIONARY:
      return state.update("dictionary", dictionary => [...dictionary, action.payload.dictionary]);
    
    case dictionaryActionTypes.DELETE_DICTIONARY:
      return state.update("dictionary", dictionary => dictionary.filter(val => val.id != action.payload.id));

    default:
      return state;
  }
};

export default dictionaryReducer;
