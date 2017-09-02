import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch }from 'react-router-dom';
import promise from 'redux-promise'
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import styles from './styles/index.css';
// for material ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {
  white, darkBlack, fullBlack,
} from 'material-ui/styles/colors';
import {fade} from 'material-ui/utils/colorManipulator';


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

// for material ui
injectTapEventPlugin();

const muiTheme = getMuiTheme({
  fontFamily: 'Roboto, sans-serif',
  palette: {
    textColor: darkBlack,
    alternateTextColor: white,
    primary1Color: '#32936f',
    primary2Color: '#66c49d',
    primary3Color: '#006444',
    accent1Color: '#e83f6f',
    accent2Color: '#ff759d',
    accent3Color: '#b00044',
    borderColor: '#DDDDDD',
    disabledColor: fade(darkBlack, 0.3),
    clockCircleColor: fade(darkBlack, 0.07),
    shadowColor: fullBlack,
  },
});

ReactDOM.render(
  <div>
    <Provider store={store}>
      <MuiThemeProvider muiTheme={muiTheme}>
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
      </MuiThemeProvider>
    </Provider>
  </div>
,document.getElementById('root'));

registerServiceWorker();
