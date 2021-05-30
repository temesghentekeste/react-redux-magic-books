/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */

import { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: 'Action' });

  const handleChage = (e) => {
    const value = e.target.value.trim();
    const name = e.target.name;
    setState({
      ...state,
      [name]: value,
    });
  };

  const titleRef = useRef('');

  useEffect(() => {
    titleRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const book = { id: Math.floor(Math.random() * 100), ...state };
    createBook(book);
    setState({
      title: '',
      category: 'Action',
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          ref={titleRef}
          value={state.title}
          onChange={(e) => handleChage(e)}
          placeholder="Book Title"
        />
        <select
          name="category"
          value={state.category}
          onChange={(e) => handleChage(e)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBook: (book) => {
      dispatch(createBook(book));
    },
  };
};

BookForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BookForm);
