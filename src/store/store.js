import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import {showMiddleware, searchMiddleware} from '../middlewares';

export default (initialState) => (
    createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(searchMiddleware, showMiddleware),
            window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f
        )
    )
);
