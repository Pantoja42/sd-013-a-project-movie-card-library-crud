import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  /* fetchMovie() {
  movieAPI.getMovies().then((response) => this.setState({
  movies: response,
    }));
  } */

  async fetchMovie() {
    const requestReturn = await movieAPI.getMovies();
    this.setState({
      movies: requestReturn,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading && <Loading />}
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;

// 1 passo - Criei uma função asíncrona que busca a lista de filmes utilizando a função já existente (getMovies), essa função retorna uma promise. Como a requisição deve ser feita no momento em que o MovieList for montado no DOM e ocorre uma mudança de estado da aplicação (informação contida na documentação do React), utilizei o componentDidMount. O estado inicial de movies que era um array vazio, passa a receber cada Movie Card.
// 2 passo - coloquei o estado inicial do loading como true, e no return dentro do render na linha 44 o operador lógico && (na primeira aula ao vivo do bloco a Maite explicou sobre ele), de que quando ele for true, ele vai renderizar o arquivo Loading.js. Se ele for false, ele vai renderizar meu map com os Movie Card.
