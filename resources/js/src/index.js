import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {HashRouter} from 'react-router-dom';

import './utils/configurations';
import { initStore } from './store/index';
import App from './App';

const store = initStore();

if (document.getElementById('app')) {
  ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  , document.getElementById('app'));
}
