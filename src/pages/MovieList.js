import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Loading, MovieCard } from '../components';

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
    movieAPI.getMovies()
      .then((response) => this.setState({ movies: response, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) return <Loading />; // Essa linha renderiza o componente loading enquanto a requisição esta em andamento.

    return (
      <div data-testid="movie-list" className="movie-list">
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
