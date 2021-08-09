import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie,
  EditMovie, NotFound, DeleteMovie } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route
          exact
          path="/movies/delete/:id"
          render={ (props) => <DeleteMovie { ...props } /> }
        />
        <Route
          exact
          render={ (props) => <EditMovie { ...props } /> }
          path="/movies/:id/edit"
        />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
