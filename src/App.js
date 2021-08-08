// Requisito 1 - Renderize BrowserRouter no componente App usando rotas.
// Você deve utilizar um BrowserRouter pra criar as rotas da sua aplicação.
// As urls de cada página devem ser desenvolvidas conforme especificado na seção O que será desenvolvido.

// O que será verificado:
// Será validado se a rota / renderiza a página MovieList
// Será validado se a rota /movies/:id renderiza a página MovieDetails
// Será validado se a rota /movies/new renderiza a página NewMovie
// Será validado se a rota /movies/:id/edit renderiza a página EditMovie
// Será validado se qualquer rota não declarada renderiza a página NotFound
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
import './App.css';

// Switch adicionado abaixo para que as rotas funcionem https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md
// Switch renderiza uma rota exclusivamente
// Route corresponde ao local renderizado inclusivamente
// Antes do Switch ser colocado, a página Loading estava carregando em uma página em que não estava sendo chamado

function App() {
  return (
    <BrowserRouter>
      <div>Movie Card Library CRUD</div>
      <Switch>
        <Route exact path="/" component={ MovieList } />
        <Route exact path="/movies/new" component={ NewMovie } />
        <Route exact path="/movies/:id" component={ MovieDetails } />
        <Route exact path="/movies/:id/edit" component={ EditMovie } />
        <Route exact component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}
export default App;

// PROJETO FEITO COM A AJUDA DE LANAI, LUIZA E PEDRO.
