import Immutable from "immutable";
import taskActionTypes from './taskActionTypes';

const defaultState = new Immutable.OrderedMap({
    task: {word: "", variants:[]},
    words: [],
    stopTest: false,
})

const modalReducer = (state = defaultState, action) => {
    switch (action.type) {
      case taskActionTypes.SET_WORDS:
        return state.set("words", action.payload.words);
  
      case taskActionTypes.SET_TASK:
        return state.set("task", action.payload.task);
      
      case taskActionTypes.NEXT_TASK:
        const words = state.get("words");
        if(!words.length)
            return state.set("stopTest", true);
        return state.set("task", words.pop()).set("words", words);

        case taskActionTypes.RESET_REDUCER:
            return defaultState;

      default:
        return state;
    }
  };
  
  export default modalReducer;