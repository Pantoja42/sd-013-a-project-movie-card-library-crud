import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <h1>Movie Card Library CRUD</h1>
      <Switch>
        <Route component={ NewMovie } path="/movies/new" />
        <Route component={ MovieList } path="/" exact />
        <Route render={ (props) => <MovieDetails { ...props } /> } path="/movies/:id" />
        <Route component={ EditMovie } path="/movies/:id/edit" exact />
        <Route component={ NotFound } path="/notfound" />
        <Redirect from="*" to="/notfound" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
