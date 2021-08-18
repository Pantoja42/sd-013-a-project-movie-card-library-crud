import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieDetails, EditMovie, MovieList, NewMovie, NotFound } from './pages';

import './App.css';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <p> Projeto Movie Card Library CRUD</p>
        <Switch>
          {/* Check the order of the most specific routes */}
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    );
  }
}
