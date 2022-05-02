import { combineReducers, createStore } from "redux";
import dictionaryReducer from "./dictionary/dictionaryReducer";
import modalReducer from './modal/modalReducer';
import wordsReducer from './words/wordsReducer';
import taskReducer from './task/taskReducer';

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  words: wordsReducer,
  modal: modalReducer,
  task: taskReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
