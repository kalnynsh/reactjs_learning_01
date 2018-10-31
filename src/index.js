import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import AppWithRouter from 'components/AppRouter';
import createStore from 'store';
import './index.css';

const store = createStore();

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store} >
            <AppWithRouter />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// if (module.hot) {
//     module.hot.accept();
// }

registerServiceWorker();
