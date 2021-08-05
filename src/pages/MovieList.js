import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      load: true,
    };
  }

  // Usei o trecho do codigo do exercicio de fixacao do dia 13.01, atividade (my-interdimensional- ricky and Morty), para conseguir extrair a simulacao da API, so nao usei o json pois estava dando erro, uma vez nao sendo uma API de verdade.

  componentDidMount() {
    movieAPI.getMovies()
      .then((data) => this.setState({ movies: data, load: false }));
  }

  render() {
    const { movies, load } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">

        { load ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
