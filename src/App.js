import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import MovieDetails from './pages/MovieDetails';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </Switch>

  );
}

export default App;
