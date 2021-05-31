import React from 'react';

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

const CategoryFilter = () => {
  console.log('Category Filter');
  return (
    <div className="categoryFilter">
      <h1>Magic Books</h1>
      <select name="category">
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
