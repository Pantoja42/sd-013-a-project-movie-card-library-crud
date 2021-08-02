import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

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

        <Route exact path="/movies/:id">
          {(RouterProps) => <MovieDetails { ...RouterProps } />}
        </Route>

        <Route exact path="/movies/:id/edit">
          {(RouterProps) => <EditMovie { ...RouterProps } />}
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
