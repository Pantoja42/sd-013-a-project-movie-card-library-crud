import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
// I used 'exact' to path to be exactly equal URL.
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <div>
          <Route exact path="/" component={ MovieList } />
          <Route exact path="/movies/:id" component={ MovieDetails } />
          <Route exact path="/movies/new" component={ NewMovie } />
          <Route exact path="/movies/:id/edit" component={ EditMovie } />
          <Route component={ NotFound } />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
