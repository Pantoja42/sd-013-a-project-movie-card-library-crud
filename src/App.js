import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MovieList from './pages/MovieList';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={ MovieList } />
      </BrowserRouter>
    </div>
  );
}

export default App;
