import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import { getMovies } from '../services/movieAPI';
import Loading from '../components/Loading';
import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
    };
  }

  componentDidMount() {
    movieAPI.getMovies().then((response) => {
      this.setState({
        movies: [...response],
      });
    });
  }

  render() {
    const { movies } = this.state;
    if (movies.length === 0) return <Loading />;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
