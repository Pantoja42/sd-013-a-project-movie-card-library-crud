import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MovieList, MovieDetails, NewMovie, EditMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id/edit/" component={ EditMovie } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
// * signifca qqer coisa, deve ficar no final para que passe primeiro os outros caminhos
// O componente Switch é usado para encapsular um conjunto de rotas definidas via Route. Dada a URL atual da aplicação, o Switch procura de cima para baixo pelo primeiro Route que possuir correspondência entre seu caminho definido na prop path do componente e a URL atual da aplicação.
