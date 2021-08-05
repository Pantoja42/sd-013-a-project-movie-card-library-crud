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
    const receivePromise = await newGetMovies();
    this.setState({
      movies: Object.values(receivePromise),
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    const showRender = () => {
      const verifyLoadState = (loading) ? <Loading /> : undefined;
      return verifyLoadState;
    };
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        { showRender() }
      </div>
    );
  }
}

export default MovieList;
