import { CREATE_BOOK, DELETE_BOOK } from './actionTypes';

export const createBook = (book) => {
  console.log(book);
  return {
    type: CREATE_BOOK,
    payload: book,
  };
};

export const deleteBook = (book) => ({
  type: DELETE_BOOK,
  payload: book,
});
