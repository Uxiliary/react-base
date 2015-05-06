import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

import Headline from '../headline/headline.js';
import Test from '../test/test.js';
// import 'app.scss';

var App = React.createClass({
  render() {
    return (
      <div className="nav">
        <Link to="app">Home</Link> <Link to="test">Test</Link>

        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="test" path="/test" handler={Test}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
