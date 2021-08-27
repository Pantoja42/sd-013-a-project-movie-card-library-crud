/*
1 - Renderize BrowserRouter no componente App usando rotas
Você deve utilizar um BrowserRouter pra criar as rotas da sua aplicação. As urls de cada página devem ser desenvolvidas conforme especificado na seção O que será desenvolvido.

O que será verificado:
Será validado se a rota / renderiza a página MovieList

Será validado se a rota /movies/:id renderiza a página MovieDetails

Será validado se a rota /movies/new renderiza a página NewMovie

Será validado se a rota /movies/:id/edit renderiza a página EditMovie

Será validado se qualquer rota não declarada renderiza a página NotFound
*/

import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { EditMovie, MovieDetails, MovieList, NewMovie, NotFound } from './pages';

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route path="/movies/:id" component={ MovieDetails } />
        <Route path="/movies/new" component={ NewMovie } />
        <Route path="/movies/:id/edit" component={ EditMovie } />
        <Route component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
