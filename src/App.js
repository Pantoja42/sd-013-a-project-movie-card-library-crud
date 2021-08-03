import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="" component={ NotFound } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
    </BrowserRouter>
  );
}

export default App;
