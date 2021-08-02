import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.fetchMovieApi = this.fetchMovieApi.bind(this);
  }

  componentDidMount() {
    this.fetchMovieApi();
  }

  fetchMovieApi = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({
      movies, loading: false,
    });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <div data-testid="movie-list">
        { loading ? <Loading />
          : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
