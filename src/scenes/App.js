import React from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import { Welcome, Credits } from '../sections';

function App() {
  return (
    <div>
      <Welcome />
      <Credits />
    </div>
  );
}

export default App;
