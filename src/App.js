import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NotFound, NewMovie } from './pages/index';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div>Movie Card Library CRUD</div>
          <MovieList />
          <MovieDetails />
          <NewMovie />
          <EditMovie />
          <NotFound />
        </div>
      </BrowserRouter>
    );
  }
}
