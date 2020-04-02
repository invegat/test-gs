import { combineReducers } from 'redux';
import TestGSReducer from './testGS'
import QuoteReducer from './quote'

const rootReducer = combineReducers({
  tests: TestGSReducer,
  quote: QuoteReducer
});

export default rootReducer;
