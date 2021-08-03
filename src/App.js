import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';
import './App.css';

function App() {
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <main>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="*" component={ NotFound } />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
