import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';

const categories = [
  'All',
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
    minWidth: 120,
  },
}));

const CategoryFilter = ({ filterChange }) => {
  const classes = useStyles();

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
        <Select
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
        </Select>
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
