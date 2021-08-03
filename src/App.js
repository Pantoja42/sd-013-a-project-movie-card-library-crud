import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages/index';

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/" component={ MovieList } />
        <Route exact path="" component={ NotFound } />
      </Switch>
    );
  }
}

export default App;
