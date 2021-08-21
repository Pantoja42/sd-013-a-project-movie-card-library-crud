import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
// import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      {/* atualizando para Switch e a ordem das rotas, tava quebrando o app */}
      <Switch>
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
