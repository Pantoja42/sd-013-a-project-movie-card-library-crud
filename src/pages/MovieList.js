// Requisito 2 - Faça uma requisição para buscar e mostrar a lista de filmes quando MovieList for montado.
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

// Esse componente que irá montar todos os filmes na tela, ele faz isso utilizando um .map (HOF)
import React from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends React.Component {
  constructor() {
    super();

    // Passo 1: setar o estado inicial
    this.state = {
      movies: [], // já veio no projeto
      loading: true, // true pq enquanto a requisição não retorna a resposta, "carregando..." será exibido na tela
    };

    this.handleState = this.handleState.bind(this); // pq do bind? - o constructor enxerga o this
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening
    // Passo 2: Fazer a requisição ao módulo movieAPI.js. Essa requisição também já atualiza o setState

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
