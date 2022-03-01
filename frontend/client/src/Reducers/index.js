import { combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';

import AuthoReducer from "./AuthoReducer";
import StreamReducers from './StreamReducers'
export default combineReducers({
  autho: AuthoReducer,
  form: formReducer,
  streams: StreamReducers
});