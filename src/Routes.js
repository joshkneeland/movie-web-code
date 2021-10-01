import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import App from './components/App';

import Home from './views/Home';
import MovieDetails from './views/MovieDetails';

const Routes = routeProps => (
  <App location={routeProps.location}>
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/movie-details" component={MovieDetails} /> */}
      <Route exact path="/movie-details/:id" component={MovieDetails} />
    </Switch>
  </App>
)

export default withRouter(Routes)
