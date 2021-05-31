import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { id, title, category } = book;
  return (
    <card className="bookCard">
      <div className="bookCard__basicInfo">
        <span className="bookCard__basicInfo-category">{id}</span>
        <h3 className="bookCard__basicInfo-title">{title}</h3>
        <span className="bookCard__basicInfo-user">{category}</span>
        <div className="bookCard__basicInfo-actions">
          <span>Comments</span>
          <button type="submit" onClick={() => handleRemoveBook(book)}>
            Remove
          </button>
          <span>Edit</span>
        </div>
      </div>

      <div className="bookCard__progress">
        <div className="Oval-2" />
        <div>
          <span>64 %</span>
          <span>completed</span>
        </div>
      </div>

      <div className="bookCard__currentChapter">
        <h4>Current Chapter</h4>
        <span>Chapter 17</span>
        <button type="submit">update progress</button>
      </div>
    </card>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
