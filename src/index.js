import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import storeConfig from './store';

import App from './containers/app';
import Home from './containers/home';


const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
      </Route>
      <Route path="*" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
