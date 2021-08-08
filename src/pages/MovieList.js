import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  // requisito 2 ================
  componentDidMount() {
    this.requestAPI();
  }

  requestAPI = async () => {
    const getFakeAPI = await movieAPI.getMovies();
    this.setState({ movies: getFakeAPI, loading: false });
  }

  // fim requisito 2 ================

  render() {
    const { movies, loading } = this.state;

    // requisito 2 ================
    // Render Loading here if the request is still happening
    if (loading) {
      return <Loading />;
    }
    // fim requisito 2 ================

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
