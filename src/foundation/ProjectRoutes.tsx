import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MyProjects, ViewProject, Resume } from 'sections';
import { ProjectLayout, AnyLayout } from './Layout';

export function ProjectRoutes() {
  return (
    <Route exact path={['/projects', '/view', '/resume']}>
      <ProjectLayout title="Akinyele - My projects" activeFor='projects'>
        <Switch>
          <Route exact path='/projects' component={MyProjects} />
          <Route exact path='/view' component={ViewProject} />
        </Switch>
      </ProjectLayout>
    </Route>
  )
}

export function ResumeRoutes() {
  return (
    <Route exact path={['/resume']}>
      <AnyLayout for="Resume" title="Akinyele - Resume/CV" activeFor='resume'>
        <Switch>
          <Route exact path='/resume' component={Resume} />
        </Switch>
      </AnyLayout>
    </Route>
  )
}