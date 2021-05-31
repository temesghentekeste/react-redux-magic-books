import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 100),
      title: 'As a Man Thinketh',
      category: 'Self-Help',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'I, Robot ',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 100),
      title: 'Oliver Twist',
      category: 'Kids',
    },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
