import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
