import { combineReducers } from 'redux';

import bookReducer from './books';
import filterReducer from './filter';

const rootReducre = combineReducers({
  books: bookReducer,
  filter: filterReducer,
});

export default rootReducre;
