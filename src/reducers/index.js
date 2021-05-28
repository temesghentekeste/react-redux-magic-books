import { combineReducers } from 'redux';

import bookReducer from './books';

const rootReducre = combineReducers({
  books: bookReducer,
});

export default rootReducre;
