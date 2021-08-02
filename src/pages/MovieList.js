import React, { Component } from 'react';
import { MovieCard, Loading } from '../components';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    this.setState({
      loading: true,
    }, async () => {
      const data = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: data,
      });
    });
  }

  render() {
    const { movies, loading } = this.state;

    // Render Loading here if the request is still happening

    if (loading) {
      return <Loading />;
    }
    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
