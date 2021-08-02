import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <BrowserRouter>
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
          <EditMovie />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
