import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import {
  MovieList,
  MovieDetails,
  NewMovie,
  EditMovie,
  NotFound,
} from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path='/' component={MovieList}></Route>
        <Route exact path='/movies/new' component={NewMovie}></Route>
        <Route exact path='/movies/:id' component={MovieDetails}></Route>
        <Route exact path='/movies/:id/edit' component={EditMovie}></Route>
        <Route path='*' component={NotFound}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
