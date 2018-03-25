import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import 'bootstrap-css-only';
import store from './getStore';
import {HashRouter} from 'react-router-dom';

window.onpopstate = state => console.log(state);

render(<Provider store={store}>
    <HashRouter>
        <App/>
    </HashRouter>
</Provider>, document.getElementById('app'));