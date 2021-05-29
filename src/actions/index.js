import { CREATE_BOOK, DELETE_BOOK } from './actionTypes';

export const createBook = (book) => ({
  type: CREATE_BOOK,
  payload: book,
});

export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  payload: book,
});
