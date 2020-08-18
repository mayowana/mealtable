import { combineReducers } from "redux";
import menuReducer from "./reducers/menuReducer";
import userReducer from "./reducers/userReducer";
import {firebaseReducer} from 'react-redux-firebase'
import {firestoreReducer} from 'redux-firestore'

const rootReducer = combineReducers({
  menuReducer,
  userReducer,
  firebaseReducer,
  firestoreReducer,
});

export default rootReducer;
