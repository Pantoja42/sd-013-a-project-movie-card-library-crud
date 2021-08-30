import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import {
  MovieList,
  NewMovie,
  MovieDetails,
  EditMovie,
  NotFound,
} from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;
