import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path="/movies/:id"
        render={ (props) => <MovieDetails { ...props } /> }
      />

      <Route
        exact
        path="/movies/new"
        component={ NewMovie }
      />

      <Route
        exact
        path="/movies/:id/edit"
        render={ (props) => <EditMovie { ...props } /> }
      />

      <Route exact path="/" component={ MovieList } />

      <Route exact path="" component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
