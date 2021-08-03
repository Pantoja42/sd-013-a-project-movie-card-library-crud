import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route exact path="/movies/new" render={ () => <NewMovie /> } />
        <Route exact path="/movies/:id" render={ (p) => <MovieDetails { ...p } /> } />
        <Route exact path="/movies/:id/edit" render={ (p) => <EditMovie { ...p } /> } />
        <Route exact path="*" render={ () => <NotFound /> } />
      </Switch>
    </Router>
  );
}

export default App;
