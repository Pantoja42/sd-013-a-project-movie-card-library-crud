import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };

    this.changeState = this.changeState.bind(this);
  }

  componentDidMount() {
    this.changeState();
  }

  async changeState() {
    const moviesList = await movieAPI.getMovies();
    this.setState({
      movies: moviesList,
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {loading ? <Loading /> : movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

export default MovieList;
