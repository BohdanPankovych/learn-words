import { combineReducers, createStore } from "redux";
import dictionaryReducer from "./dictionary/dictionaryReducer";

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
