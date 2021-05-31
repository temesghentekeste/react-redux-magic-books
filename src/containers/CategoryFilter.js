import PropTypes from 'prop-types';

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

const CategoryFilter = ({ filterChange }) => (
  <div className="categoryFilter">
    <h1>Magic Books</h1>
    <select name="category" onChange={(e) => filterChange(e.target.value)}>
      {categories.map((category) => (
        <option key={category}>{category}</option>
      ))}
    </select>
  </div>
);

CategoryFilter.propTypes = {
  filterChange: PropTypes.func.isRequired,
};

export default CategoryFilter;
