import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import { getMovies } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetch(getMovies);
  }

  async fetch(newGetMovies) {
    const promise = await newGetMovies();
    this.setState({
      movies: Object.values(promise),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const showLonding = () => {
      const verifyLonding = (loading) ? <Loading /> : undefined;
      return verifyLonding;
    };
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        { showLonding() }
      </div>
    );
  }
}

export default MovieList;
