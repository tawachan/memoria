import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import promise from 'redux-promise'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import './styles/index.css';
import { AUTH_USER } from './actions/types'

import Top          from './frames/top'
import SignIn       from './components/auth/sign_in';
import SignOut      from './components/auth/sign_out';
import SignUp       from './components/auth/sign_up';
import Manage       from './frames/manage';
import NotFound     from './frames/not_found'
import RequireAuthentication from './components/auth/require_authentication'

const createStoreWithMiddleware = applyMiddleware(promise, reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers)
const token = localStorage.getItem('access-token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          {/* before signup */}
          <Route path='/top' exact component={Top} />
          <Route path='/auth/sign_in' exact component={SignIn} />
          <Route path='/auth/sign_out' exact component={SignOut} />
          <Route path='/auth/sign_up' exact component={SignUp} />
          {/* after signup */}
          <Route path='/' exact component={RequireAuthentication(Manage)} />
          <Route path='/manage' exact component={RequireAuthentication(Manage)} />

          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </Provider>
  </div>
,document.getElementById('root'));

registerServiceWorker();
