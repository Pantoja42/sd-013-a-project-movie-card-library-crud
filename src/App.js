import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <div>
        <div> Movie Card Library CRUD </div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

// Referências:
// https://pt-br.reactjs.org/docs/getting-started.html
// https://app.betrybe.com/course/front-end/ciclo-de-vida-de-componentes-e-react-router/react-router/22d8da78-d744-421e-b669-d72ff189e506/o-que-vamos-aprender/100e758a-a080-4726-a460-a68620a175ae?use_case=calendar
