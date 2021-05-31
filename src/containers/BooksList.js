/* eslint-disable arrow-body-style */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook, filterBooks } from '../actions';
import './BookList.css';
import CategoryFilter from './CategoryFilter';

const BooksList = ({ books, deleteBook, filter }) => {
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };

  const handleFilterChange = (category) => {
    console.log(category);
    filterBooks(category);
  };

  let filteredBooks;
  if (filter === 'All') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter((book) => book.category === filter);
  }
  console.log(filteredBooks);
  return (
    <div className="books">
      <CategoryFilter filterChange={handleFilterChange} />
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
            {filteredBooks.map((book) => (
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
    filterBooks: (filter) => {
      dispatch(filterBooks(filter));
    },
  };
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
