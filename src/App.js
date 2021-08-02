import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import { MovieDetails, MovieList, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route component={ NotFound } />
    </BrowserRouter>
  );
}

export default App;
