/* eslint-disable comma-dangle */
import { CHANGE_FILTER } from '../actions/actionTypes';

const filter = 'All';

const filterReducer = (state = filter, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default filterReducer;
