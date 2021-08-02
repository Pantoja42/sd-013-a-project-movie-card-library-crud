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
    <Switch>
      <Route path="/" component = {MovieList}/>
      <Route path="/movies/:id" component = {MovieDetails}/>
      <Route path="/movies/new" component = {NewMovie}/>
      <Route path="/movies/:id/edit" component = {EditMovie}/>
      <Route component={NotFound}/>

    </Switch>
      
            
    </Router>
  );
}

export default App;

/* <Router>
  <div>Movie Card Library CRUD</div>
</Router> */