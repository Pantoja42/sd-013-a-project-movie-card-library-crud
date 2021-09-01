// Requisito 1

// 1 - Renderize BrowserRouter no componente App usando rotas
// Você deve utilizar um BrowserRouter pra criar as rotas da sua aplicação. As urls de cada página devem ser desenvolvidas conforme especificado na seção O que será desenvolvido.

// O que será verificado:
// Será validado se a rota / renderiza a página MovieList
// Será validado se a rota /movies/:id renderiza a página MovieDetails
// Será validado se a rota /movies/new renderiza a página NewMovie
// Será validado se a rota /movies/:id/edit renderiza a página EditMovie
// Será validado se qualquer rota não declarada renderiza a página NotFound

// Referências:
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2

// ==============================================================================

// Precisa importar todos os componentes que irão utilizar rotas, como: MovieList, MovieDetails, NewMovie, EditMovie e NotFound
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MovieList from './pages/MovieList';
import MovieDetails from './pages/MovieDetails';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import NotFound from './pages/NotFound';
// import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <div>Movie Card Library CRUD</div>
        <BrowserRouter>
          <Switch>
            <Route path="/movies/new" component={ NewMovie } />
            <Route path="/movies/:id/edit" component={ EditMovie } />
            <Route exact path="/" component={ MovieList } />
            <Route path="/movies/:id" component={ MovieDetails } />
            <Route path="*" component={ NotFound } />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
