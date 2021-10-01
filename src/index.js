import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from "react-router-dom";

import configureStore from './redux';
import Routes from './Routes';

ReactDOM.render(
  <Provider store={configureStore()}>
    <Router>
      <Routes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);