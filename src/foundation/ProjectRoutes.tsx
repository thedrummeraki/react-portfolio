import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyProjects, ViewProject } from 'sections';
import { ProjectLayout } from './Layout';

export function ProjectRoutes() {
  return (
    <Route exact path={['/projects', '/view']}>
      <ProjectLayout title="Akinyele - My projects" activeFor='projects'>
        <Switch>
          <Route exact path='/projects' component={MyProjects} />
          <Route exact path='/view' component={ViewProject} />
        </Switch>
      </ProjectLayout>
    </Route>
  )
}

      
