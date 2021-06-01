/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */

import { useState, useRef, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  TextField,
  Button,
  Select,
  MenuItem,
  makeStyles,
} from '@material-ui/core';
import { createBook } from '../actions';

// const categories = [
//   'Action',
//   'Biography',
//   'History',
//   'Horror',
//   'Kids',
//   'Learning',
//   'Sci-Fi',
// ];

const categoriesV2 = [
  {
    value: 'Action',
    label: 'Action',
  },
  {
    value: 'Biography',
    label: 'Biography',
  },
  {
    value: 'History',
    label: 'History',
  },
  {
    value: 'Horror',
    label: 'Horror',
  },

  {
    value: 'Kids',
    label: 'Kids',
  },

  {
    value: 'Learning',
    label: 'Learning',
  },

  {
    value: 'Sci-Fi',
    label: 'Sci-Fi',
  },
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

const BookForm = ({ createBook }) => {
  const [state, setState] = useState({ title: '', category: '' });
  const classes = useStyles();

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
    <div className="bookFormContainer">
      <h1 className="bookFormContainer__title">add new book</h1>
      <form onSubmit={handleSubmit} className="bookFormContainer__form">
        <TextField
          id="outlined-basic"
          label="Book title"
          variant="outlined"
          name="title"
          ref={titleRef}
          value={state.title}
          onChange={(e) => handleChage(e)}
          className="bookFormContainer__form-title"
        />
        {/* <Select
          name="category"
          value={state.category}
          onChange={(e) => handleChage(e)}
          displayEmpty
          className={`${classes.selectEmpty} bookFormContainer__form-select`}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem key="" value="">
            Categories
          </MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select> */}
        <TextField
          id="outlined-select-category"
          name="category"
          select
          label="Categories"
          value={state.category}
          onChange={handleChage}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
          className="bookFormContainer__form-select"
        >
          {categoriesV2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
        <button type="submit" className="formContainer__form-btnSubmit">
          Add Book
        </button>
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
