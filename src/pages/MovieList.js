import React, { Component } from 'react';
import Loading from '../components/Loading';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.catchMovie = this.catchMovie.bind(this);

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.catchMovie();
  }

  async catchMovie() {
    this.setState({ loading: true });
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    const carregamento = <Loading />;
    return (
      <div data-testid="movie-list">
        { loading ? carregamento : movies }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
