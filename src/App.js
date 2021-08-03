import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>

      <div>Movie Card Library CRUD</div>
      {/* <Link to="/"> MovieList </Link> */}
      {/* <Link to="/movies/:id">MovieDetails</Link> */}

      <Switch>

        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" render={ () => <MovieList /> } />
        <Route component={ NotFound } />

      </Switch>

    </Router>
  );
}

export default App;
