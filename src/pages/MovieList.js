// =========================================

// 2 - Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado.
// Para buscar a lista, você deve utilizar a função getMovies importada do módulo movieAPI em MovieList.
// Essa função retorna uma promise. A requisição deve ser feita no momento em que o MovieList for montado no DOM.
// Enquanto a requisição estiver em curso, MovieList deve renderizar o componente Loading, como ilustrado na imagem a seguir.

// Obs: O componente Loading deve conter o texto Carregando...

// Uma vez que a requisição retornar, o resultado deve ser renderizado.
// Para cada filme, renderize um componente MovieCard, como ilustrado abaixo.

// Você precisará adicionar um estado em MovieList para controlar o que será exibido.

// O que será verificado:
// Será validado se a página MovieList exibe o texto Carregando... enquanto estiver fazendo a requisição
// Será validado se a página MovieList exibe um MovieCard para cada filme retornado pela API

// =========================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  // Passo 1: Criar o constructor setando o estado inicial
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.handleState = this.handleState.bind(this);
  }

  // Passo 3: "A requisição deve ser feita no momento em que o MovieList for montado no DOM"
  // Ou seja, chamamos a função dentro de componentDidMount
  componentDidMount() {
    this.handleState();
  }

  // Passo 2: Fazer a requisição ao módulo movieAPI.js
  // Fazer o bind porque não estamos fazendo uma arrow function
  // atualizar o state
  async handleState() {
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  // Passo 4: {loading && <Loading />} -> Sempre que o estado loading for true, renderizamos <Loading />
  // Corrigir texto da página Loading para "Carregando..."
  // o .map que vai renderizar cada um dos filmes já veio
  render() {
    const { loading, movies } = this.state;
    return (
      <div data-testid="movie-list">
        {loading && <Loading />}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

// Requisito 6: Será validado se a página inicial (que é MovieList segundo o path / que está
// descrito no App.js) contém um link "ADICIONAR CARTÃO".
// Esse link deve redirecionar para a página de criação de filmes
// O link está abaixo do map.

export default MovieList;
