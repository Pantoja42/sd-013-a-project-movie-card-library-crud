import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();
    this.setarEstado = this.setarEstado.bind(this);

    this.state = {
      movies: [],
      carregando: true,
    };
  }

  async componentDidMount() {
    const movies = await movieAPI.getMovies();
    this.setarEstado(movies);
  }

  setarEstado(movies) {
    this.setState({ movies, carregando: false });
  }

  render() {
    const { movies, carregando } = this.state;

    if (carregando === true) {
      return (
        <Loading />
      );
    } return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new"> ADICIONAR CARTÃO</Link>
      </div>
    );
  }
}

export default MovieList;
