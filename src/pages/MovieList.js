// Requisito 2

// Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado
// Para buscar a lista, você deve utilizar a função getMovies importada do módulo movieAPI em MovieList. Essa função retorna uma promise. A requisição deve ser feita no momento em que o MovieList for montado no DOM. Enquanto a requisição estiver em curso, MovieList deve renderizar o componente Loading, como ilustrado na imagem a seguir.

// Obs: O componente Loading deve conter o texto Carregando...
// Uma vez que a requisição retornar, o resultado deve ser renderizado. Para cada filme, renderize um componente MovieCard, como ilustrado abaixo.

// Você precisará adicionar um estado em MovieList para controlar o que será exibido.

// O que será verificado:
// Será validado se a página MovieList exibe o texto Carregando... enquanto estiver fazendo a requisição
// Será validado se a página MovieList exibe um MovieCard para cada filme retornado pela API

// Referências:
// https://github.com/tryber/sd-013-a-project-movie-card-library-crud/pull/51
// https://github.dev/tryber/sd-013-a-live-lectures/tree/lecture/11.2

// =================================================================================

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

// constructor(), super() e o state já estavam no projeto
class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true, // Passo 1 - Setar o estado inicial
    };

    this.handleState = this.handleState.bind(this); // O principal objetivo do método bind é alterar o contexto this de uma função independente de onde a mesma esteja sendo chamada.
    // Referência: https://tableless.com.br/explorando-metodo-bind-em-javascript/
  }

  // Passo 3 - "A requisição deve ser feita no momento em que o MovieList for montado no DOM", com isso chamamos a função dentro de componentDidMount
  componentDidMount() {
    this.handleState();
  }

  // Passo 2 - Fazer a requisição a movieAPI.js
  async handleState() { // função assíncrona
    const moviesList = await movieAPI.getMovies(); // guardamos na variável movieList o resultado da requisição a função getMovies que consta em src/services/movieAPI
    this.setState({ // após a requisição, atualizamos o estado, e antes que aparecia na tela carregando pq o loading estava true, após o resultado da requisição, passa a ser false, pois ele sumirá da tela, carregando os cards.
      movies: moviesList,
      loading: false,
    });
  }

  // Passo 4 -
  // Linha 45 - {loading && <Loading />} -> Sempre que o estado loading for true, renderizamos <Loading />
  // Linha 46 - o .map vai renderizar cada um dos filmes que vieram pela API
  // Linha 47 - o "Link" irá direcionar para a página de adicionar um novo filme ao clicar em "ADICIONAR CARTÃO"
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

export default MovieList;
