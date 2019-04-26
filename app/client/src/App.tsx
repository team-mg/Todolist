import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store/store';
import Main from './Main';

import '../scss/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>, document.getElementById('main')
)