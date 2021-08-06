import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import { MovieList, MovieDetails, EditMovie, NewMovie, NotFound} from './pages';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" Component={ MovieList} />
        <Route exact path="/movies/:id" Component={ MovieDetails} />
        <Route exact path="/movies/new" Component={ NewMovie } />
        <Route exact path="/movies/:id/edit" Component={ EditMovie } />
        <Route Component={ NotFound } />
      </Switch>
    </BrowserRouter>
   
  );
}

export default App;
