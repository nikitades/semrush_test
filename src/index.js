import React from 'react';
import {render} from 'react-dom';
import App from './_containers/App';
import {Provider} from 'react-redux';
import 'bootstrap-css-only';
import store from './helpers/getStore';
import loadContent from "./helpers/loadContent";

loadContent();
window.onpopstate = loadContent;

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('app'));