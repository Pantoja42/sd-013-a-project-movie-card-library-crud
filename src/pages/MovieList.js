import React, { Component } from 'react';
import { Loading, MovieCard } from '../components';
import { getMovies as movieAPI } from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.moviePromisse();
  }

  async moviePromisse() {
    const data = await movieAPI();
    this.setState(
      { loading: true },
      () => {
        this.setState((prevState) => ({
          movies: [...prevState.movies, ...data],
          loading: false,
        }));
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    const movieMap = movies
      .map((movie) => <MovieCard key={ movie.title } movie={ movie } />);

    return (
      <div data-testid="movie-list">
        { loading ? <Loading /> : movieMap }
      </div>
    );
  }
}

export default MovieList;
