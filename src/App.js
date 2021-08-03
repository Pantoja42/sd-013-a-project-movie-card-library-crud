import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ MovieList } />
          <Route path="/movies/:id/edit" component={ EditMovie } />
          <Route path="/movies/new" component={ NewMovie } />
          <Route path="/movies/:id" component={ MovieDetails } />
          <Route path="*" component={ NotFound } />
        </Switch>
        <nav>
          <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        </nav>
      </BrowserRouter>
    );
  }
}

export default App;
