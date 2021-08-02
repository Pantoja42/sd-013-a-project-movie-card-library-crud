import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
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
          { (RouterProps) => <MovieDetails { ...RouterProps } /> }
        </Route>
        <Route exact path="/movies/:id/edit">
          <EditMovie />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
