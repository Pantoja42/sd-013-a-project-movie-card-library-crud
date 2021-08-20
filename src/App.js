import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={ EditMovie } path="/movies/:id/edit" exact />
        <Route component={ MovieList } path="/" exact />
        <Route component={ NewMovie } path="/movies/new" exact />
        <Route render={ (props) => <MovieDetails { ...props } /> } path="/movies/:id" />
        <Route component={ NotFound } path="*" exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
