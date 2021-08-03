import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MovieCard, Loading } from '../components';
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
    this.callMovieAPI();
  }

  callMovieAPI = async () => {
    const info = await movieAPI.getMovies();
    this.setState({ isLoading: true }, () => {
      this.setState((state) => ({
        movies: [...state.movies, ...info],
        isLoading: false,
      }));
    });
  }

  render() {
    const { movies, isLoading } = this.state;
    const loaded = (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        <Link to="/movies/new">ADICIONAR CARTÃO</Link>
      </div>
    );

    return (
      <div data-testid="movie-list">
        {isLoading ? <Loading /> : loaded }
      </div>
    );
  }
}

export default MovieList;
