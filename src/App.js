import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <section>
        <Link to="/">HOME</Link>
        <br />
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </section>
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
