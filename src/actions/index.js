import { CREATE_BOOK, DELETE_BOOK, CHANGE_FILTER } from './actionTypes';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  payload: book,
});

export const filterBooks = (category) => {
  console.log(category, 'Dispatched');
  return {
    type: CHANGE_FILTER,
    payload: category,
  };
};
