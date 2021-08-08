import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { Loading } from '../components';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      loading: true,
      movies: [],
    };
  }

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const movies = await movieAPI.getMovies();
    this.setState({ loading: false, movies });
  }

  moviesToRender = (movies) => (
    <div data-testid="movie-list">
      {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>
  )

  render() {
    const { movies, loading } = this.state;
    return (
      loading ? <Loading /> : this.moviesToRender(movies)
    );
  }
}

export default MovieList;
