import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetch(getMovies);
  }

  async fetch(newGetMovies) {
    const receivePromisse = await newGetMovies();
    this.setState({
      movies: Object.values(receivePromisse),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const show = () => {
      const verifyState = (loading) ? <Loading /> : undefined;
      return verifyState;
    };
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        { show() }
      </div>
    );
  }
}

export default MovieList;
