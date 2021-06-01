import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

// const categories = [
//   'All',
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
    value: 'All',
    label: 'All',
  },
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

// const useStyles = makeStyles((theme) => ({
//   formControl: {
//     margin: theme.spacing(2),
//     minWidth: 120,
//   },
// }));

const CategoryFilter = ({ filterChange }) => {
  // const classes = useStyles();

  const [category, setCategory] = useState('All');
  const handleCategoryChange = (e) => {
    filterChange(e.target.value);
    setCategory(e.target.value);
  };
  return (
    <div className="categoryFilter">
      <div className="categoryFilter__left">
        <h1 className="categoryFilter__left-heading">Bookstore CMS</h1>
        <h3 className="categoryFilter__left-caption">Books</h3>
        {/* <Select
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          displayEmpty
          className={classes.selectEmpty}
          inputProps={{ 'aria-label': 'Without label' }}
        >
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
          value={category}
          onChange={(e) => handleCategoryChange(e)}
          SelectProps={{
            native: true,
          }}
          variant="outlined"
        >
          {categoriesV2.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
      <div className="categoryFilter__right">
        <AccountCircleIcon />
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
