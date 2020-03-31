import { combineReducers } from 'redux';
import TestGSReducer from './testGS'

const rootReducer = combineReducers({
  tests: TestGSReducer
});

export default rootReducer;
