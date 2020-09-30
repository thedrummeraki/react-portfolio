import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome } from 'sections';
import { MainLayout } from './Layout';

export function MainRoutes() {
  return (
    <Route exact path={['/']}>
      <MainLayout title="Akinyele Cafe-Febrissy">
        <Switch>
          <Route exact path='/' component={Welcome} />
        </Switch>
      </MainLayout>
    </Route>
  )
}
