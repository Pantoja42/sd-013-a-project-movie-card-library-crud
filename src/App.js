import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
// import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      {/* <Switch> */}
      <Link to="/">MovieList</Link>
      <Route to="/" component={ MovieList } />

      <Link to="/movies/:id">MovieDetails</Link>
      <Route to="movies/:id" component={ MovieDetails } />

      <Link to="/movies/new">NewMovie</Link>
      <Route to="/movies/new" component={ NewMovie } />

      <Link to="/movies/:id/edit">EditMovie</Link>
      <Route to="/movies/:id/edit" component={ EditMovie } />

      <Link to="notfound">NotFound</Link>
      <Route to="/notfound" component={ NotFound } />
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
