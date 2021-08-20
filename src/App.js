import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieDetails, EditMovie, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <h2> Projeto Movie Card Library CRUD</h2>
        <Switch>
          {/* Check the order of the most specific routes */}
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/new"><NewMovie /></Route>
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
