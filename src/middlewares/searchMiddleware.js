import { searchRequest, searchSuccess, searchFailure } from '../actions';
import { searchApi } from '../api';

const searchMiddleware = store => next => action => {
    if (action.type === searchRequest.toString()) {
        const query = action.payload;

        searchApi(query)
            .then(result => {
                store.dispatch(searchSuccess(result));
            })
            .catch(error => {
                store.dispatch(searchFailure(error));
            });
    }

    return next(action);
};

export {searchMiddleware};
