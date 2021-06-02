/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';
import { deleteBook, filterBooks } from '../actions';
import './BookList.css';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({ books, deleteBook, filter, filterBooks }) => {
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };

  const handleFilterChange = (category) => {
    filterBooks(category);
  };

  let filteredBooks;
  if (filter === 'All' || filter === 'Categories') {
    filteredBooks = books;
  } else {
    filteredBooks = books.filter((book) => book.category === filter);
  }
  return (
    <div className="books">
      <CategoryFilter filterChange={handleFilterChange} />
      <div className="books__list">
        {filteredBooks.map((book) => (
          <Book book={book} key={book.id} handleRemoveBook={handleRemoveBook} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  books: state.books,
  filter: state.filter,
  filterBooks: PropTypes.func.isRequired,
});

const mapDispatchToProps = (dispatch) => {
  return {
    deleteBook: (book) => {
      dispatch(deleteBook(book));
    },
    filterBooks: (category) => {
      dispatch(filterBooks(category));
    },
  };
};

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  deleteBook: PropTypes.func.isRequired,
  filterBooks: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
