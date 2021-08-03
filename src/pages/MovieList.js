import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fectMovie();
  }

  fectMovie = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({ loading: false, movies });
  }

  movieListElement = (movies) => (
    <div data-testid="movie-list">
      {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>
  )

  render() {
    const { movies, loading } = this.state;
    const load = <h1>Carregando...</h1>;

    return (
      loading ? load : this.movieListElement(movies)
    );
  }
}

export default MovieList;
