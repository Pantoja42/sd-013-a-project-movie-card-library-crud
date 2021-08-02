import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// https://github.com/tryber/sd-13a-live-lectures/pull/40/files?file-filters%5B%5D=.ico&file-filters%5B%5D=.js&file-filters%5B%5D=.png
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages/index';
import './App.css';

// https://reactrouter.com/web/example/no-match usei no NotFound
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={ MovieList }
        />
        <Route
          exact
          path="/movies/:id"
          render={ (props) => <MovieDetails { ...props } /> }
        />
        <Route
          exact
          path="/movies/new"
          component={ NewMovie }
        />
        <Route
          exact
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
