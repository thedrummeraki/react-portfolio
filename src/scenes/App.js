import React from 'react';

import 'bulma/css/bulma.css';
import './App.css';

import {
  Welcome,
  AboutMe,
  Introduction,
  //Projects,
  Credits
} from '../sections';

export default function App(props) {
  return (
    <div className="App">
      <Welcome />
      <Introduction />
      <AboutMe />
      <Credits />
    </div>
  );
}
