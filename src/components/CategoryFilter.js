import PropTypes from 'prop-types';
import { useState } from 'react';

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

const CategoryFilter = ({ filterChange }) => {
  const [category, setCategory] = useState('All');
  const handleCategoryChange = (e) => {
    filterChange(e.target.value);
    setCategory(e.target.value);
  };
  return (
    <div className="categoryFilter">
      <div className="categoryFilter__right">
        <h1>Bookstore CMS</h1>
        <h3>Books</h3>
        <select
          name="filter"
          value={category}
          onChange={(e) => handleCategoryChange(e)}
        >
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </div>
      <div className="categoryFilter__left"></div>
    </div>
  );
};

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
