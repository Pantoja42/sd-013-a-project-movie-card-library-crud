import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    const listOfMovie = await movieAPI.getMovies();
    this.setState({
      movies: listOfMovie,
    });
  }

  render() {
    const { movies } = this.state;

    return (
      <div data-testid="movie-list">
        <Loading />
        {movies.map((movie) => <MovieCard key={ movie.id } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
