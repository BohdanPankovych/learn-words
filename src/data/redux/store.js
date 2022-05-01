import { combineReducers, createStore } from "redux";
import dictionaryReducer from "./dictionary/dictionaryReducer";
import modalReducer from './modal/modalReducer';
import wordsReducer from './words/wordsReducer';

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  words: wordsReducer,
  modal: modalReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
