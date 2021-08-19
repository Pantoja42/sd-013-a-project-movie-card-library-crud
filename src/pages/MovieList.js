import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

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
    this.fetchApi();
  }

  fetchApi = async () => {
    const filme = await movieAPI.getMovies();
    this.setState({ loading: false, movies: filme });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {
          loading ? <Loading />
            : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        }
      </div>);
  }
}

export default MovieList;
