import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route path="/" component={ MovieList } />
          <Route
            path="/movies/:id"
            render={ (props) => <MovieDetails { ...props } /> }
          />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="" component={ NotFound } />
        </BrowserRouter>
      </main>
    );
  }
}

export default App;
