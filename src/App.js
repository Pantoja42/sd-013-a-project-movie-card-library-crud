import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { EditMovie, MovieList, MovieDetails, NewMovie, NotFound } from './pages';


function App() {
  return (
    <Router>
      <div>
        Movie Card Library CRUD
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route path={ undefined } component={ NotFound } />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
