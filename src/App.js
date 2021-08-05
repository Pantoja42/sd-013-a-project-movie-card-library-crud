import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieDetails, NotFound, EditMovie, NewMovie, MovieList } from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>Movie Card Library CRUD</div>
        <Switch>
          <Route exact path="/">
            <MovieList />
          </Route>
          <Route exact path="/movies/new">
            <NewMovie />
          </Route>
          <Route exact path="/movies/:id">
            {(props) => <MovieDetails { ...props } />}
          </Route>
          <Route exact path="/movies/:id/edit">
            <EditMovie />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
