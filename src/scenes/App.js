import React from 'react';

import 'bulma/css/bulma.css';
import './App.css';

import {
  Welcome,
  AboutMe,
  //Projects,
  Credits
} from '../sections';

export default function App(props) {
  return (
    <div className="App">
      <Welcome />
      <AboutMe />
      <Credits />
    </div>
  );
}
