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
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

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
          placeholder="Book Title"
        />
        <select name="category">
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
