import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading  from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      infoLoading: true,
    };
  }

  async componentDidMount() {
    const infoMovies = await movieAPI.getMovie();
    console.log(infoMovies);
    const json = await infoMovies.json();
    this.setState({
      movies: json,
      infoLoading: false,
    });
  }

  render() {
    const { movies } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        { infoLoading && <Loading /> }
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
