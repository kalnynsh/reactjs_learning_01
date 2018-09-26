import { combineReducers } from 'redux';
import { ADD_USER } from '../actions/usersTypes';

const count = (state = 0, action) => {
  switch (action.type) {
    case ADD_USER:
      return state + 1;
    default:
      return state;
  }
};

const records = (state = [], action) => {
  switch (action.type) {
    case ADD_USER:
      return [...state, action.payload];
    default:
      return state;
  }
};

const users = combineReducers({
  count,
  records
});

export const getUsersCount = state => state.users.count;
export const getUsersArray = state => state.users.records;
export default users;
