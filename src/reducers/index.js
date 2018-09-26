import { combineReducers } from 'redux';
import comments from './comments';
import users from './users';

const reducers = combineReducers({
    comments,
    users
});

export default reducers;
