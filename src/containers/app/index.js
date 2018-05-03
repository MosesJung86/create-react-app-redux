import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../home';
import About from '../about';

const App = () => (
  <div>
    <header>
      <Link to="/assessment">Test</Link>
      <Link to="/about">About</Link>
    </header>

    <main>
      <Route exact path="/assessment" component={Home} />
      <Route exact path="/about" component={About} />
    </main>
  </div>
);

export default App;
