import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id">
          {(RouterProps) => <MovieDetails { ...RouterProps } />}
        </Route>
        <Route exact path="/movies/:id/edit">
          {(RouterProps) => <EditMovie { ...RouterProps } />}
        </Route>
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
