import { createStore, compose } from 'redux';
import rootReducer from '../reducers';

export default (initialState = undefined) => {
    const store = createStore(
        rootReducer,
        initialState,
        compose(window.devToolsExtension ?
            window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
        )
    );

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers/index');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}
