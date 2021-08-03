import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: true,
    };
    this.addMovies = this.addMovies.bind(this);
  }

  componentDidMount() {
    this.addMovies();
  }

  async addMovies() {
    this.setState({
      movies: await movieAPI.getMovies(),
    });
    this.setState({
      loading: false,
    });
  }

  render() {
    const { movies, loading } = this.state;
    // Render Loading here if the request is still happening
    return (
      <div className="movie-list" data-testid="movie-list">
        { loading && <Loading /> }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
