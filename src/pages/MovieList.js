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
    this.movieState();
  }

  // Function that calls getMovies()
  movieState = async () => {
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
    const movieCards = (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
    // Render Loading here if the request is still happening

    return (
      <div>
        {isLoading ? <Loading /> : movieCards}
      </div>
    );
  }
}

export default MovieList;
