import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { MovieDetails, NewMovie, EditMovie, MovieList, NotFound } from './pages/index'
import './App.css';

function App() {
  return (
    <div>
      <h1>Movie Card Library CRUD</h1>
      <Router>   
        <Route path="/movies/:id" component={ MovieDetails }/>
        <Route path="/movies/new" component={ NewMovie }/>
        <Route path="/movies/:id/edit" component={ EditMovie }t/>
        <Route path="/" component={ MovieList }/>
        <Route component={ NotFound }/>
      </Router>
    </div>
  );
}

export default App;