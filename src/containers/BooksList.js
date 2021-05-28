import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Book from '../components/Book';

const BooksList = ({ books }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>
            Title:
            {books.length}
          </th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book) => (
          <Book book={book} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state) => ({
  books: state.books,
});

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, null)(BooksList);
