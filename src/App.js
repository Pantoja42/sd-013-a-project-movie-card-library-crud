import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/about" />
        <Route path="/contact" />
        <Route path="/login" />
      </Switch>

    </Router>
  );
}

export default App;
