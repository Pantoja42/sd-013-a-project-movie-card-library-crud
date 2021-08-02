import React, { Component } from 'react';
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
    movieAPI.getMovies().then((res) => this.setState({ movies: res, loading: false }));
  }

  render() {
    const { movies, loading } = this.state;
    if (loading) {
      return <Loading />;
    }
    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
