import React from 'react';
import logo from './logo.svg';
import {
  Hero,
} from 'bloomer';
import 'bulma/css/bulma.css';
import './App.css';
import Welcome from './Welcome';
import Credits from './Credits';

function App() {
  return (
    <div>
      <Welcome />
      <Credits />
    </div>
  );
}

export default App;
