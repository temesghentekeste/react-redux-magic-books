import { createStore } from 'redux';
import rootReducer from './reducers';

const initialState = {
  books: [
    {
      id: Math.random() * 100,
      title: 'As a Man Thinketh',
      category: 'Self-help',
    },
    {
      id: Math.random() * 100,
      title: 'I, Robot ',
      category: 'Sci-Fic',
    },
    {
      id: Math.random() * 100,
      title: 'Oliver Twist',
      category: 'Social Nover',
    },
  ],
};

const store = createStore(rootReducer, initialState);

export default store;
