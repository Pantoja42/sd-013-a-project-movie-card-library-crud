import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <div>
      <div>Movie Card Library CRUD</div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movies/new">
            <NewMovie />
          </Route>
          <Route exact path="/movies/:id">
            {(RouterProps) => <MovieDetails { ...RouterProps } /> }
          </Route>
          <Route exact path="/movies/:id/edit">
            {(RouterProps) => <EditMovie { ...RouterProps } /> }
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
