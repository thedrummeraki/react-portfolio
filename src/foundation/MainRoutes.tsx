import { Link, SectionContainer } from 'components';
import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Welcome, Music } from 'sections';
import { z } from 'utils';
import { AnyLayout, MainLayout } from './Layout';

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

export function MusicRoutes() {
  return (
    <Route exact path={['/music']}>
      <AnyLayout for="Music" title="Akinyele's Music Now">
        <Switch>
          <Route exact path='/music' component={Music} />
        </Switch>
      </AnyLayout>
    </Route>
  );
}

function NotFound() {
  return (
    <SectionContainer title='404 not found'>
      <p className={z`> span { color grey; :hover { color #aaa } }`}>
        I'm sorry! I tried... everything I could! Nothing. What a shame.
        Well, not all hope is lost!
        You can <Link to='/'>go back home</Link> or <Link to='/projects'>view all projects</Link>.
      </p>
    </SectionContainer>
  )
}
