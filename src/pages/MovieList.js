import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.setApi = this.setApi.bind(this);

    this.state = {
      movies: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.setApi();
  }

  setApi() {
    this.setState(
      { loading: true },
      () => {
        const { getMovies } = movieAPI;
        getMovies()
          .then((data) => {
            this.setState({
              movies: data,
              loading: false,
            });
          });
      },
    );
  }

  render() {
    const { movies, loading } = this.state;
    if (loading === true) {
      return (<Loading />);
    }

    return (
      <div data-testid="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
