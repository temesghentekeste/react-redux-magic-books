/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook } from '../actions';
import './BookList.css';
import CategoryFilter from './CategoryFilter';

const BooksList = ({ books, deleteBook, filter }) => {
  console.log(filter);
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };
  return (
    <div className="books">
      <CategoryFilter />
      <div className="bookList">
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>
                Title:
                {books.length}
              </th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <Book
                book={book}
                key={book.id}
                handleRemoveBook={handleRemoveBook}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (book) => {
      dispatch(deleteBook(book));
    },
  };
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
