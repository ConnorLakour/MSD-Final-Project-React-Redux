import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import AuthoReducer from "./AuthoReducer";

export default combineReducers({
  autho: AuthoReducer,
  form: formReducer
});