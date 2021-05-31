/* eslint-disable comma-dangle */
import { CHANGE_FILTER } from '../actions/actionTypes';

const initialState = [];

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return [...state, action.payload];

    default:
      return state;
  }
};

export default filterReducer;
