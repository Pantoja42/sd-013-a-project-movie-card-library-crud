import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.setEstado = this.setEstado.bind(this);
  }

  async componentDidMount() {
    const { getMovies } = movieAPI;
    const response = await getMovies();
    this.setEstado(response);
  }

  setEstado(valor) {
    this.setState(() => ({
      movies: valor,
      loading: false,
    }));
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

      </div>
    );
  }
}

export default MovieList;
