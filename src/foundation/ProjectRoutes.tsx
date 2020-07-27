import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyProjects } from 'sections';
import { ProjectLayout } from './Layout';

export function ProjectRoutes() {
  return (
    <Route exact path={['/projects']}>
      <ProjectLayout title="My projects" activeFor='projects'>
        <Switch>
          <Route exact path='/projects' component={MyProjects} />
        </Switch>
      </ProjectLayout>
    </Route>
  )
}

      
