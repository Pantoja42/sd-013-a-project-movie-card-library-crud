import React from 'react';
import { BrowserRouter, Router } from 'react-router-dom';
import { MovieList } from './pages';

function App() {
  return (
    // <BrowserRouter>
    //   <Router path="/" componet={ MovieList } />
    // </BrowserRouter>
    <MovieList />
  );
}

export default App;
