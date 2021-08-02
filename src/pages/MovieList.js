import React, { Component } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.getMovies = this.getMovies.bind(this);

    this.state = {
      movies: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    this.getMovies();
    // console.log(movieList);
  }

  async getMovies() {
    movieAPI.getMovies()
      .then((response) => {
        this.setState({
          movies: response,
          isLoading: false,
        });
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { isLoading ? <Loading /> : (
          movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
        ) }
      </div>
    );
  }
}

export default MovieList;
