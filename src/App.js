import React, { Component } from 'react';
import { BrowserRouter, Route, Switch  } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NotFound, NewMovie } from './pages/index';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>              
            <Route  path="/" component={ MovieList } />
            <Route  path="/movies/:id" component={ MovieDetails } />
            <Route  path="/movies/new" component={ NewMovie } />
            <Route exact path="/movies/:id/edit" component={ EditMovie } />
            <Route path="*"component={ NotFound } />         
        </Switch>
      </BrowserRouter>
    );
  }
}
