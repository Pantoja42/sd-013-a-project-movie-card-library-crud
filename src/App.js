import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Router exact path="/" component={ MovieList } />
        <Router exact path="/movies/:id" component={ MovieDetails } />
        <Router exact path="/movies/new" component={ NewMovie } />
        <Router exact path="/movies/:id/edit" component={ EditMovie } />
        <Router exact path="#" component={ NotFound } />
      </BrowserRouter>
    );
  }
}

export default App;
