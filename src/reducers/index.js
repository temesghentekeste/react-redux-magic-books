import { combineReducers } from 'redux';

import bookReducer from './books';

const rootReducre = combineReducers({
  book: bookReducer,
});

export default rootReducre;
