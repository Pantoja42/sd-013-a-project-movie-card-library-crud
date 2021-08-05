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

  componentDidMount() {
    this.infoMovies();
  }

  infoMovies = async () => {
    const dataMovie = await movieAPI.getMovies();
    this.setState({ infoLoading: true }, () => {
      this.setState((previous) => ({
        movies: [...previous.movies, ...dataMovie],
        infoLoading: false,
      }));
    });
  }

  render() {
    const { movies, infoLoading } = this.state;
    const movieCard = (
      <div data-testid="movie-list">
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );

    // Render Loading here if the request is still happening

    return (
      <div>
        { infoLoading ? <Loading />: movieCard }
      </div>
    );
  }
}

export default MovieList;
