import React from 'react';
import './App.css';
import { NavLink, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (

    <div className="main">
      <header className="navbar-header">
        <h1 className="page-title">Movie Card Library CRUD</h1>
        <NavLink to="/movies/new" className="buttonLink top"> ADICIONAR CARTÃO</NavLink>
      </header>
      <Switch>
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
