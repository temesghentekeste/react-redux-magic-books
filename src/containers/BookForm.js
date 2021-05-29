import { useRef, useEffect } from 'react';

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
          ref="titleRef"
          placeholder="Book Title"
        />
        <select name="category">
          {categories.map((category, index) => (
            <option key={index}>{category}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default BookForm;
