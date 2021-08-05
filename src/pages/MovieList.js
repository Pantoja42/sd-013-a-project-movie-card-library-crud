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

  async fetch(get) {
    const promise = await get();
    this.setState({
      movies: Object.values(promise),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    const loadingShow = () => {
      const loadingCondition = (loading) ? <Loading /> : undefined;
      return loadingCondition;
    };

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        {loadingShow()}
      </div>
    );
  }
}

export default MovieList;
