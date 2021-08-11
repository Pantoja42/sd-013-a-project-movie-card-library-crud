import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.catchMovie();
  }

  async catchMovie() {
    movieAPI.getMovies()
      .then((resolve) => this.setState({ movies: resolve }));
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <div data-testid="movie-list">
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
        <Loading />
      </div>
    );
  }
}

export default MovieList;
