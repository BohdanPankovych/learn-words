import { combineReducers, createStore } from "redux";
import dictionaryReducer from "./dictionary/dictionaryReducer";
import modalReducer from './modal/modalReducer';

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  modal: modalReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
