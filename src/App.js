import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Navbar } from './components';
import {
  EditMovie,
  MovieDetails,
  MovieList,
  NewMovie,
  NotFound,
} from './pages';

function App() {
  const linksInfo = [
    { url: '/', component: <MovieList /> },
    { url: '/movies/new', component: <NewMovie /> },
    { url: '/movies/:id', component: <MovieDetails /> },
    { url: '/movies/:id/edit', component: <EditMovie /> },
  ];
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Navbar />
      <Switch>
        {linksInfo.map(({ url, component }) => (
          <Route key={ url } exact path={ url }>
            {component}
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
