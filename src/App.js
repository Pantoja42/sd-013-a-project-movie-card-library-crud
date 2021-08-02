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
    { url: '/movies/:id', component: <MovieDetails /> },
    { url: '/movies/new', component: <NewMovie /> },
    { url: '/movies/:id/edit', component: <EditMovie /> },
    { url: '*', component: <NotFound /> },
  ];
  return (
    <Router>
      <div>Movie Card Library CRUD</div>
      <Navbar links={ linksInfo } />
      <Switch>
        {linksInfo.map((link) => (
          <Route key={ link.url } exact path={ link.url }>
            {link.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
