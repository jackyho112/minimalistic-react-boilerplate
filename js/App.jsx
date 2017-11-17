import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './containers/Landing';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <div className="app">
    <Switch>
      <Route exact path="/" component={props => <Landing {...props} />} />
      <Route component={FourOhFour} />
    </Switch>
  </div>
);

export default App;
