import React from "react";
import {App, NotFound, Resume, ProjectPreview} from './scenes';

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

export default function AppRouter() {
  return(
    <Router>

      <Switch>
        <Route exact path='/' component={App} />
        <Route exact path='/resume' component={Resume} />
        <Route path='/preview/:name' component={ProjectPreview} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Router>
  );
}
