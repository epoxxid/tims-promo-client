import {combineReducers} from 'redux';

import filterReducer from './filterReducer';
import offersReducer from './offersReducer';
import loadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  offers: offersReducer,
  loading: loadingReducer
});

export default rootReducer;
