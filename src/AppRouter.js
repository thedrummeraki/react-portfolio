import React from "react";
import {App, NotFound} from './scenes';

import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

export default function AppRouter() {
  return(
    <Router>

      <Switch>
        <Route exact path='/' component={App} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}
