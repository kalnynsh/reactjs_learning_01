import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import {
    showRequest,
    showSuccess,
    showFailure
} from '../actions';
import { LOADING_STATE } from '../constants/LOADING_STATE';

const loadingState = handleActions(
    {
        [showRequest.toString()]: () => LOADING_STATE.loading,
        [showSuccess.toString()]: () => LOADING_STATE.success,
        [showFailure.toString()]: () => LOADING_STATE.failure
    },
    LOADING_STATE.idle
);

const result = handleActions(
    {
        [showSuccess.toString()]: (_state, action) => action.payload
    },
    []
);

export default combineReducers({
    loadingState,
    result
});
