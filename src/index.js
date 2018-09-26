import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import AppWithRedux from 'components/AppWithRedux';
import createStore from './store';
import registerServiceWorker from './registerServiceWorker';

const store = createStore();

ReactDOM.render(
    <Provider store={store}>
        <AppWithRedux />
    </Provider>,
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept();
// }

registerServiceWorker();
