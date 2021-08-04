import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import { Loading, MovieCard, MovieForm } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route exact path="/movies/new">
          <NewMovie />
        </Route>
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/:id/edit">
          <EditMovie />
        </Route>
        {/* Com base em: https://ui.dev/react-router-v5-handling-404-pages/ */}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
