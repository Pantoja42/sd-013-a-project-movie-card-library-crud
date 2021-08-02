import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.moviesState();
  }

  moviesState = async () => {
    const data = await movieAPI.getMovies();
    this.setState({ isLoading: true }, () => {
      this.setState((prevState) => ({
        movies: [...prevState.movies, ...data],
        isLoading: false,
      }));
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    const listMovies = (
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );

    return (
      <div data-testid="movie-list">
        {(isLoading ? <Loading /> : listMovies)}
      </div>
    );
  }
}

export default MovieList;
