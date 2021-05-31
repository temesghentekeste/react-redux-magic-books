/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;
  return (
    <card className="bookCard">
      <div className="bookCard__basicInfo">
        <p className="bookCard__basicInfo-category">{category}</p>
        <h3 className="bookCard__basicInfo-title">{title}</h3>
        <p className="bookCard__basicInfo-user">Temesghen Bahta</p>
        <div className="bookCard__basicInfo__footer">
          <span className="bookCard__basicInfo__footer-comments">Comments</span>
          <span
            type="submit"
            onClick={() => handleRemoveBook(book)}
            className="bookCard__basicInfo__footer-remove"
          >
            Remove
          </span>
          <span className="bookCard__basicInfo__footer-edit">Edit</span>
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
