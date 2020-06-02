/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';
import * as redux from 'redux';
import * as ReactRedux from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

/// components ///
import App from './App';

/// states ///
import avatar from 'states/avatar';

/// styles ///
import 'reset-css/reset.css';
import 'normalize-css/normalize.css';
import './styles/o11-basics.css';
import './styles/index.css';

/***************************************
  APP
***************************************/
const compose = (
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || redux.compose
);

const avatarStore = avatar.store.create (
  compose (redux.applyMiddleware (thunk, logger))
);

ReactDOM.render (
  <ReactRedux.Provider store={avatarStore}>
    <App/>
  </ReactRedux.Provider>
, document.getElementById ('root')
);
