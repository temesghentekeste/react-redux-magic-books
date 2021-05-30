/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */

import { useState, useRef, useEffect } from 'react';

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];

const BookForm = () => {
  const [state, setState] = useState({ title: '', category: '' });

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

  return (
    <div>
      <form>
        <input
          type="text"
          name="title"
          ref={titleRef}
          value={state.title}
          onChange={(e) => handleChage(e)}
          placeholder="Book Title"
        />
        <select name="category" onChange={(e) => handleChage(e)}>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default BookForm;
