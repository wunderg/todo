import 'babel-polyfill';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory, useRouterHistory, Redirect } from 'react-router';
import { createHashHistory } from 'history';

import storeConfig from './store';

import App from './containers/app';
import Home from './containers/home';
import About from './containers/about';


const appHistory = useRouterHistory(createHashHistory)({ queryKey: false});
const store = storeConfig();

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
