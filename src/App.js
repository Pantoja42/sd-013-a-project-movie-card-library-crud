import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MovieList, NewMovie, EditMovie, NotFound, MovieDetails } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route
          path="/movies/:id/edit"
          component={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="*" component={ NotFound } />
      </Switch>
      <div>Movie Card Library CRUD</div>
    </BrowserRouter>
  );
}

export default App;
