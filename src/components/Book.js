/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const { title, category } = book;
  return (
    <div className="bookCard">
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
        <div>
          <div className="bookCard__progress-oval-2" />
        </div>
        <div className="bookCard__progress__percent">
          <span className="bookCard__progress__percent-complete">64%</span>
          <span className="bookCard__progress__percent-completedText">
            completed
          </span>
        </div>
      </div>
      <div className="bookFormContainer__line" />
      <div className="bookCard__currentChapter">
        <h4 className="bookCard__currentChapter-chapter">Current Chapter</h4>
        <span className="bookCard__currentChapter-currentLesson">
          Chapter 17
        </span>
        <button
          type="submit"
          className="bookCard__currentChapter-updateProgress"
        >
          update progress
        </button>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
