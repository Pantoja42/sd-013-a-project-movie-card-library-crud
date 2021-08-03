import React, { Component } from 'react';
import { MovieCard ,Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
    
    this.fetchMovie = this.fetchMovie.bind(this);
  }

  fetchMovie() {
    movieAPI.getMovies()
      .then((data) => (
        this.setState({
          movies: data,
        })
      ))
  }

  componentDidMount() {
    this.fetchMovie();
  }

  render() {
    const { movies } = this.state;
    const isEmptyMovies = (movies.length === 0);

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { isEmptyMovies ? <Loading /> : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />) }
      </div>
    );
  }
}

export default MovieList;
