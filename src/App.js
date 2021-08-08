import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <main>
      <BrowserRouter>
        <Route exact path="/" component={ MovieList } />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" render={ (props) => <EditMovie { ...props } /> } />
        <Route path="" component={ NotFound } />
      </BrowserRouter>
    </main>
  );
}

export default App;
