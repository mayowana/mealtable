import { createStore } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk'

const store = createStore(rootReducer, composeWithDevTools());

export default store;
