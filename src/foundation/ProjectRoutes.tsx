import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyProjects } from 'sections';
import { MainLayout } from './Layout';

export function ProjectRoutes() {
  return (
    <Route exact path={['/projects']}>
      <MainLayout activeFor='projects'>
        <Switch>
          <Route exact path='/projects' component={MyProjects} />
        </Switch>
      </MainLayout>
    </Route>
  )
}

      
