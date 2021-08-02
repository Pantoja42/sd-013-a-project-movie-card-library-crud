import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// https://github.com/tryber/sd-13a-live-lectures/pull/40/files?file-filters%5B%5D=.ico&file-filters%5B%5D=.js&file-filters%5B%5D=.png
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

// https://reactrouter.com/web/example/no-match usei no NotFound
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ MovieList } />
      <Route path="/movies/:id" component={ MovieDetails } />
      <Route path="/movies/new" component={ NewMovie } />
      <Route path="/movies/:id/edit" component={ EditMovie } />
      <Route path="*"><NotFound /></Route>
    </BrowserRouter>

  );
}

export default App;
