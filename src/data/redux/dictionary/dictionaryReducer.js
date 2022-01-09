import Immutable from "immutable";
import dictionaryActionTypes from "./dictionaryActionTypes";

const defaultState = new Immutable.OrderedMap({
  dictionary: [1,2,3,4,5],
});

const dictionaryReducer = (state = defaultState, action) => {
  switch (action.type) {
    case dictionaryActionTypes.CREATE_DICTIONARY:
      return state.update("dictionary", dictionary => [...dictionary, 10]);

    default:
      return state;
  }
};

export default dictionaryReducer;
