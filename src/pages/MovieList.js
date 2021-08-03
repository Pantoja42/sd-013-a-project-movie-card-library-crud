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
    this.fetchAPI = this.fetchAPI.bind(this);
  }

  componentDidMount() {
    this.fetchAPI();
  }

  async fetchAPI() {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies: [...movies],
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    if (loading === true) {
      return (
        <div data-testid="movie-list">
          <Loading />
        </div>
      );
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />
        ))}
      </div>
    );
  }
}

export default MovieList;
