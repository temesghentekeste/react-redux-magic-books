import PropTypes from 'prop-types';

const Book = ({ book: { id, title, category } }) => (
  <tr>
    <td>{id}</td>
    <td>{title}</td>
    <td>{category}</td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  id: PropTypes.number,
  title: PropTypes.string,
  category: PropTypes.string,
};

export default Book;
