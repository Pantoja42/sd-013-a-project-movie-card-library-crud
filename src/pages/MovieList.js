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
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ loading: true }, async () => {
      const data = await movieAPI.getMovies();
      this.setState({
        loading: false,
        movies: data,
      });
    });
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <div>
        {loading ? (
          <Loading />
        ) : (
          <div data-testid='movie-list'>
            {movies.map((movie) => (
              <MovieCard key={movie.title} movie={movie} />
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default MovieList;
