import { ADD_COMMENT } from '../actions/commentsTypes';

const comments = (state = {count: 0, bodies: []}, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        count: state.count + 1,
        bodies: [...state.bodies, action.payload]
      };
    default:
      return state;
  }
};

export const getCommentsCounts = state => state.comments.count;
export const getComments = state => state.comments.bodies;
export const getLast10Comments = state => state.comments.bodies.slice(-1, 10);
export default comments;
