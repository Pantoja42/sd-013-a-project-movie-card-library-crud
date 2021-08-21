import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
// import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      {/* <Switch> */}
      <Route exact path="/" component={ MovieList } />
      <Route exact path="/movies/:id" component={ MovieDetails } />
      <Route exact path="/movies/new" component={ NewMovie } />
      <Route exact path="/movies/:id/edit" component={ EditMovie } />
      <Route path="*" component={ NotFound } />
      {/* <Redirect from="*" to="/404" /> */}
      {/* </Switch> */}
    </BrowserRouter>
  );
}

export default App;
