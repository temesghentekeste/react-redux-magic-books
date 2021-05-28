import { CREATE_BOOK, DELETE_BOOK } from '../actions/actionTypes';

const initialState = {
  books: [],
};

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        books: state.books.push(action.payload),
      };

    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => book.id !== action.payload.book),
      };

    default:
      return state;
  }
};

export default bookReducer;
