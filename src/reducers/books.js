/* eslint-disable comma-dangle */
import { CREATE_BOOK, DELETE_BOOK } from '../actions/actionTypes';

const initialState = [];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [...state, action.payload];

    case DELETE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);

    default:
      return state;
  }
};

export default bookReducer;
