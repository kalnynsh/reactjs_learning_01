import { showRequest, showSuccess, showFailure } from '../actions';
import { showApi } from '../api';

const showMiddleware = store => next => action => {
    if (action.type === showRequest.toString()) {
        const showID = action.payload;

        showApi(showID)
        .then(result => {
            store.dispatch(showSuccess(result));
        })
        .catch(error => {
            store.dispatch(showFailure(error));
        });
    }

    return next(action);
};

export { showMiddleware };
